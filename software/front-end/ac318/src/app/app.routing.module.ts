import { ModuleWithProviders } from '@angular/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { 
    path: 'class', 
    loadChildren: './class/class.module#ClassModule', 
    canActivate: [AuthGuard] 
  },
  { 
    path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'exercise', 
    loadChildren: './exercise-list/exercise-list.module#ExerciseListModule', 
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
