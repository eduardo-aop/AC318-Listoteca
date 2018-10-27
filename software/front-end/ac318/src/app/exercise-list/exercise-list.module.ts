import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExerciseListComponent } from './exercise-list.component'
import { ExerciseRoutingModule } from './exercise.routing';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseListDetailComponent } from './exercise-list-detail/exercise-list-detail.component';

@NgModule({
    imports:[
        CommonModule,
        ExerciseRoutingModule
    ],
    declarations:[
        ExerciseListComponent,
        ExerciseComponent,
        ExerciseListDetailComponent
    ],
    exports:[],
    providers:[]
})

export class ExerciseListModule {

}