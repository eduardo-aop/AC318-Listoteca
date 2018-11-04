import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  showModal = false;
  lists: any[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.getExerciseList().subscribe(
      val => {
        console.log(val);
        this.lists = val;
      }, 
      error => {

      });
    console.log(this.lists);
  }

  addExercise() {
    console.log('add');
  }

  openCreateListModal() {
    this.showModal = !this.showModal;
  }
}
