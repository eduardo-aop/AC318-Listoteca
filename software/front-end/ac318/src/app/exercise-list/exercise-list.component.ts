import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './exercise.service';
import { MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { CreateListComponent } from './create-list/create-list.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UpdateExerciseListComponent } from './update-exercise-list/update-exercise-list.component';

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
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadList();
    console.log(this.lists);
  }

  loadList() {
    this.exerciseService.getAllList().subscribe(
      response => {
        console.log(response);
        this.lists = response;
      },
      error => {

      });
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

  updateName(id: number, name: string) {
    console.log('foiw');
    const dialogRef = this.dialog.open(UpdateExerciseListComponent, {
      data: {
        name: name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result != undefined && result != '') {
        if (result != name) {
          var list = {
            id: id,
            name: result
          }
          this.exerciseService.updateListName(list).subscribe(
            response => {
              console.log('updated');
              this.loadList();
              this.openSnackBar("Lista renomeada com sucesso!", "", 3000)
            },
            error => {
              console.log('error in update ' + error);
              this.openSnackBar("Falha ao renomear lista!", "", 3000)
            }
          )
        }
      }
    });
  }

  deleteList(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.exerciseService.deleteList(id).subscribe(
          response => {
            console.log('deleted');
            this.loadList();
            this.openSnackBar("Lista removida com sucesso!", "", 3000)
          },
          error => {
            console.log('error in delete ' + error);
            this.openSnackBar("Falha ao remover lista!", "", 3000)
          }
        )
      }
    });
  }

  openSnackBar(message: string, action: string, timer: number) {
    this.snackBar.open(message, action, {
      duration: timer,
    });
  }
}
