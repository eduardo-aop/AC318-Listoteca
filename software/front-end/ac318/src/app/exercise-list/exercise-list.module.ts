import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExerciseListComponent } from './exercise-list.component'
import { ExerciseRoutingModule } from './exercise.routing';

@NgModule({
    imports:[
        CommonModule,
        ExerciseRoutingModule
    ],
    declarations:[
        ExerciseListComponent
    ],
    exports:[],
    providers:[]
})

export class ExerciseListModule {

}