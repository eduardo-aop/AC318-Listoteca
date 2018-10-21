import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClassComponent } from "./class.component";
import { ClassDetailComponent } from './class-detail/class-detail.component'
import { ClassService } from "./class.service";
import { ClassRoutingModule } from "./class-routing";


@NgModule({
    imports: [
        CommonModule,
        ClassRoutingModule
    ],
    declarations: [
        ClassComponent,
        ClassDetailComponent
    ],
    providers: [
        ClassService
    ]
})

export class ClassModule {

}