import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseListComponent } from './exercise-list.component';
import { ExerciseListDetailComponent } from './exercise-list-detail/exercise-list-detail.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { AuthGuard } from '../guards/auth.guard';

const exerciseRoutes: Routes = [
  { path: '', component: ExerciseListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: CreateExerciseComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ExerciseListDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(exerciseRoutes)
  ],
  declarations: [],
  exports: [
      RouterModule
  ]
})
export class ExerciseRoutingModule { }
