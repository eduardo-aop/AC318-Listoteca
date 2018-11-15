import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  private exercise: Exercise = new Exercise()

  openQuestion = true;
  emptyFields = false;
  savedSuccess = 0;
  validateFieldMessage = null;

  subjectControl = new FormControl();
  subjects: string[] = [];
  filteredSubjects: Observable<string[]>;

  themeControl = new FormControl();
  themes: string[] = [];
  filteredThemes: Observable<string[]>;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exercise.answers = [];
  }

  setOpenQuestion(open: boolean) {
    this.openQuestion = open;
  }

  add(): void {
    if (!this.hasEmptyFields()) {
      if (this.fieldsValidated()) {
        console.log(this.exercise);

        this.exerciseService.addExercise(this.exercise).subscribe(
          (response) => {
            console.log("success => " + response)
            if (response == 'Created') {
              this.savedSuccess = 1
              this.exercise = new Exercise();
              this.exercise.answers = []
            } else {
              this.savedSuccess = -1
            }
          }, error => {
            console.log("error => " + error)
            this.savedSuccess = -1
          });
      }
    }
  }

  onInputSubjectsChange(searchValue: string) {
    if (searchValue.length == 3) {
      this.loadClasses(searchValue);
    }
  }

  onInputThemesChange(searchValue: string) {
    if (searchValue.length == 3) {
      this.loadThemes(searchValue);
    }
  }

  loadClasses(text: string) {
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

  fieldsValidated() {
    if (this.exercise.question.length < 5 || this.exercise.question.length > 50) {
      this.validateFieldMessage = "O campo questão deve conter no mínimo 5 caracteres e no máximo 50";
      return false;
    }
    if (this.exercise.subject.length < 5 || this.exercise.subject.length > 50) {
      this.validateFieldMessage = "O campo assunto deve conter no mínimo 5 caracteres e no máximo 50";
      return false;
    }
    if (this.exercise.theme.length < 5 || this.exercise.theme.length > 50) {
      this.validateFieldMessage = "O campo tema deve conter no mínimo 5 caracteres e no máximo 50";
      return false;
    }

    if (!this.openQuestion) {
      if (this.exercise.answers[0].length < 5 || this.exercise.answers[0].length > 50) {
        this.validateFieldMessage = "O campo primeira alternativa deve conter no mínimo 5 caracteres e no máximo 50";
        return false;
      }
      if (this.exercise.answers[1].length < 5 || this.exercise.answers[1].length > 50) {
        this.validateFieldMessage = "O campo segunda alternativa deve conter no mínimo 5 caracteres e no máximo 50";
        return false;
      }
      if (this.exercise.answers[2].length < 5 || this.exercise.answers[2].length > 50) {
        this.validateFieldMessage = "O campo terceira alternativa deve conter no mínimo 5 caracteres e no máximo 50";
        return false;
      }
      if (this.exercise.answers[3].length < 5 || this.exercise.answers[3].length > 50) {
        this.validateFieldMessage = "O campo qurta alternativa deve conter no mínimo 5 caracteres e no máximo 50";
        return false;
      }
    }
    this.validateFieldMessage = null;
    return true;
  }

  hasEmptyFields() {
    if (this.exercise.question == '' || this.exercise.question == undefined
      || this.exercise.subject == '' || this.exercise.subject == undefined
      || this.exercise.theme == '' || this.exercise.theme == undefined) {
      console.log('1')

      this.emptyFields = true
      return true
    }

    if (!this.openQuestion && this.exercise.answers.length < 4) {
      console.log('2')
      this.emptyFields = true
      return true
    }
    console.log('3')
    this.emptyFields = false
    return false
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
