import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ClassComponent } from './class.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { AuthGuard } from '../guards/auth.guard';

const classRoutes: Routes = [
  { path: '', component: ClassComponent, canActivate: [AuthGuard]  },
  { path: ':id', component: ClassDetailComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(classRoutes)
  ],
  declarations: [],
  exports: [
      RouterModule
  ]
})
export class ClassRoutingModule { }
