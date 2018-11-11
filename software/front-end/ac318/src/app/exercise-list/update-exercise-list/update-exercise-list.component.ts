import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-update-exercise-list',
  templateUrl: './update-exercise-list.component.html',
  styleUrls: ['./update-exercise-list.component.css']
})
export class UpdateExerciseListComponent implements OnInit {

  listName: any = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.listName = this.data.name;
  }

}
