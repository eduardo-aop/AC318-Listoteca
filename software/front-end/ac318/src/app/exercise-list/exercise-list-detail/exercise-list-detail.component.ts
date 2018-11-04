import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-list-detail',
  templateUrl: './exercise-list-detail.component.html',
  styleUrls: ['./exercise-list-detail.component.css']
})
export class ExerciseListDetailComponent implements OnInit {

  private exercises: any[] = [];
  private listId;

  constructor(private route: ActivatedRoute, 
    private exerciseService: ExerciseService) {

     }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.listId = params['id'];
    });

    this.exerciseService.getExercisesFromList(this.listId).subscribe(
      response => {
        this.exercises = response;
      });
  }

}
