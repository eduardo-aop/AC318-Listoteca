import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userAuthenticated = false;
  showNavBarEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User) {
    //TODO: call back end

    if(user.name === "eduardo") {
      this.userAuthenticated = true;

      this.showNavBarEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.showNavBarEmitter.emit(false);
      this.userAuthenticated = false;
    }
  }

  userIsAuthenticated() {
    return this.userAuthenticated;
  }
}
