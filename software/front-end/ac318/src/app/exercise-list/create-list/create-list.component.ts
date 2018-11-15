import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  emptyFields = false
  formIsValid = false

  currentUser: any;
  listName: string = ''
  listSubject: string = ''
  listTheme: string = ''

  subjectControl = new FormControl();
  subjects: string[] = [];
  filteredSubjects: Observable<string[]>;

  themeControl = new FormControl();
  themes: string[] = [];
  filteredThemes: Observable<string[]>;

  constructor(private exerciseService: ExerciseService,
    private dialogRef: MatDialogRef<CreateListComponent>,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    console.log("opened");
  }

  validatedFields() {
    if (this.listName.length < 5 || this.listName.length > 50) {
      this.openSnackBar("O campo nome deve conter no mínimo 5 caracteres e no máximo 50", "", 3000)
      return false;
    }
    if (this.listSubject.length < 5 || this.listSubject.length > 50) {
      this.openSnackBar("O campo assunto deve conter no mínimo 5 caracteres e no máximo 50", "", 3000)
      return false;
    }
    if (this.listTheme != '' && (this.listTheme.length < 5 || this.listTheme.length > 50)) {
      this.openSnackBar("O campo tema deve conter no mínimo 5 caracteres e no máximo 50", "", 3000)
      return false;
    }
    return true;
  }

  hasEmptyFields() {
    if (this.listName == undefined || this.listName == ''
      || this.listSubject == undefined || this.listSubject == '') {
      return true;
    }

    return false;
  }

  generateList() {
    if (!this.hasEmptyFields()) {
      if (this.validatedFields()) {
        this.emptyFields = false
        this.formIsValid = true
        var list = {
          teacherId: this.currentUser.id,
          name: this.listName,
          subject: this.listSubject,
          theme: this.listTheme
        }

        this.exerciseService.generateList(list).subscribe(
          response => {
            console.log('lista gerada');
            this.openSnackBar("Nova lista gerada com sucesso", "", 3000)
            this.dialogRef.close(true)
          },
          error => {
            console.log('deu ruim ' + error.status);
            if (error.status == 400) {
              if (this.listTheme == '') {
                this.openSnackBar("Não há exercícios com essa Matéria!", "", 5000)
              } else {
                this.openSnackBar("Não há exercícios com essa Matéria e Tema simultâneamente!", "", 5000)
              }
            } else {
              this.openSnackBar("Falha ao gerar uma nova Lista", "", 5000)
            }
          }
        )
      }
    } else {
      this.openSnackBar("Os campos Nome e Matéria são obrigatórios!", "", 5000)
      this.emptyFields = true
      this.formIsValid = false
    }
  }

  openSnackBar(message: string, action: string, timer: number) {
    this.snackBar.open(message, action, {
      duration: timer,
    });
  }

  onInputSubjectsChange(searchValue: string) {
    console.log(searchValue);
    if (searchValue.length == 3) {
      this.loadClasses(searchValue);
    }
  }

  onInputThemesChange(searchValue: string) {
    console.log(searchValue);
    if (searchValue.length == 3) {
      this.loadThemes(searchValue);
    }
  }

  loadClasses(text: string) {
    console.log('loadclass');
    this.exerciseService.loadExerciseClasses(text).subscribe(
      resp => {
        //convert json to array
        var array = [];
        var i;
        for (i = 0; i < resp.length; i++) {
          array[i] = resp[i].subject;
        }
        this.subjects = array;
        this.filteredSubjects = this.subjectControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filterSubject(this.subjects, value))
          );
        console.log(resp);
        console.log(array);
      }
    )
  }

  loadThemes(text: string) {
    console.log('loadtheme');
    this.exerciseService.loadExerciseThemes(text).subscribe(
      resp => {
        //convert json to array
        var array = [];
        var i;
        for (i = 0; i < resp.length; i++) {
          array[i] = resp[i].theme;
        }
        this.themes = array;
        this.filteredThemes = this.themeControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filterTheme(this.themes, value))
          );
        console.log(resp);
        console.log(array);
      }
    )
  }

  private _filterSubject(list: string[], value: string): string[] {
    var filterValue = value.toLowerCase();

    return list.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterTheme(list: string[], value: string): string[] {
    var filterValue = value.toLowerCase();

    return list.filter(option => option.toLowerCase().includes(filterValue));
  }
}
