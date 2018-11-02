import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ExerciseListComponent } from './exercise-list.component'
import { ExerciseRoutingModule } from './exercise.routing';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseListDetailComponent } from './exercise-list-detail/exercise-list-detail.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { ExerciseService } from './exercise.service';
import { CreateListComponent } from './create-list/create-list.component';

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
        ExerciseRoutingModule,
        HttpClientModule
    ],
    declarations: [
        ExerciseListComponent,
        ExerciseComponent,
        ExerciseListDetailComponent,
        CreateExerciseComponent,
        CreateListComponent
    ],
    exports: [CreateListComponent],
    providers: [ExerciseService],
    entryComponents: [CreateListComponent]
})

export class ExerciseListModule {

}