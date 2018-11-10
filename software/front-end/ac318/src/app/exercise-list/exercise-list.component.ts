import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './exercise.service';
import { MatDialog } from '@angular/material';
import { CreateListComponent } from './create-list/create-list.component';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  showModal = false;
  lists: any[] = [];
  closeResult: string;

  constructor(private exerciseService: ExerciseService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.loadList();
    console.log(this.lists);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateListComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadList()
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  loadList() {
    this.exerciseService.getExerciseList().subscribe(
      val => {
        console.log(val);
        this.lists = val;
      },
      error => {

      });
  }
}
