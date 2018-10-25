import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AppRoutingModule } from './app.routing.module';
import { LoginService } from './login/login.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
