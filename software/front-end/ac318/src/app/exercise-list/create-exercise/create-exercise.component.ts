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

  subjectControl = new FormControl();
  subjects: string[] = ['One', 'Two', 'Three'];
  filteredSubjects: Observable<string[]>;

  themeControl = new FormControl();
  themes: string[] = ['One 3', 'Two 2', 'Three 1'];
  filteredThemes: Observable<string[]>;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
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
    console.log(this.exercise)
    
    this.exerciseService.addExercise(this.exercise)
      .subscribe(hero => {
        console.log("added Success")
      });
  }

  private _filterSubject(list: string[], value: string): string[] {
    const filterValue = value.toLowerCase();

    return list.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterTheme(list: string[], value: string): string[] {
    const filterValue = value.toLowerCase();

    return list.filter(option => option.toLowerCase().includes(filterValue));
  }
}
