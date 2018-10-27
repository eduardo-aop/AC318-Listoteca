import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  lists: any[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.lists = this.exerciseService.getExerciseList();
    console.log(this.lists);
  }

  addExercise() {
    console.log('add');
  }
}
