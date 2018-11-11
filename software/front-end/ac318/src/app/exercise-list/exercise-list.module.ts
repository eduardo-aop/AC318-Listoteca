import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatAutocompleteModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ExerciseListComponent } from './exercise-list.component'
import { ExerciseRoutingModule } from './exercise.routing';
import { ExerciseListDetailComponent } from './exercise-list-detail/exercise-list-detail.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { ExerciseService } from './exercise.service';
import { CreateListComponent } from './create-list/create-list.component';
import { UpdateExerciseListComponent } from './update-exercise-list/update-exercise-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatSnackBarModule,
        ExerciseRoutingModule,
        HttpClientModule
    ],
    declarations: [
        ExerciseListComponent,
        ExerciseListDetailComponent,
        CreateExerciseComponent,
        CreateListComponent,
        UpdateExerciseListComponent
    ],
    exports: [ExerciseListComponent],
    providers: [ExerciseService],
    entryComponents: [CreateListComponent, UpdateExerciseListComponent]
})

export class ExerciseListModule {

}