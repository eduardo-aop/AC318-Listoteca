import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule, routing } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClassComponent } from './class/class.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { ClassService } from './class/class.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    ClassComponent,
    ClassDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [ClassService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  classId = 5;
}
