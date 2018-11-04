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

  openQuestion = true
  emptyFields = false
  savedSuccess = 0

  subjectControl = new FormControl();
  subjects: string[] = ['Compiladores', 'Sistema Operacional', 'Banco de Dados', 'Programação Orientada a Objetos'];
  filteredSubjects: Observable<string[]>;

  themeControl = new FormControl();
  themes: string[] = ['Regex', 'ACID', 'Herança'];
  filteredThemes: Observable<string[]>;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exercise.answers = []
    this.filteredSubjects = this.subjectControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterSubject(this.subjects, value))
      );

    this.filteredThemes = this.themeControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterTheme(this.themes, value))
      );
  }

  setOpenQuestion(open: boolean) {
    this.openQuestion = open;
  }

  add(): void {
    if (!this.hasEmptyFields()) {
      console.log(this.exercise);

      this.exerciseService.addExercise(this.exercise).subscribe(
        (response) => {
          console.log("success => " + response)
          if (response == 'Created') {
            this.savedSuccess = 1
            this.exercise = new Exercise();
          } else {
            this.savedSuccess = -1
          }
        }, error => {
          console.log("error => " + error)
          this.savedSuccess = -1
        });
    }
  }

  hasEmptyFields() {
    console.log('0')
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
