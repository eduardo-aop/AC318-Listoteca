import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseListComponent } from './exercise-list.component';
import { AuthGuard } from '../guards/auth.guard';

const exerciseRoutes: Routes = [
  { path: '', component: ExerciseListComponent, canActivate: [AuthGuard]  }
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
