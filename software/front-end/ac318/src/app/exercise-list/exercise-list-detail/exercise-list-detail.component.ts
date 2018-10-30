import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-list-detail',
  templateUrl: './exercise-list-detail.component.html',
  styleUrls: ['./exercise-list-detail.component.css']
})
export class ExerciseListDetailComponent implements OnInit {

  private exercises: any[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exercises = this.exerciseService.getExercisesFromList()
  }

}
