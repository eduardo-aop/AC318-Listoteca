import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ClassComponent } from './class.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';

const classRoutes: Routes = [
  { path: 'classes', component: ClassComponent },
  { path: 'class/:id', component: ClassDetailComponent }
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
