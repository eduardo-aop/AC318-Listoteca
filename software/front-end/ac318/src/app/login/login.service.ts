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
      this.setUserAuthentitated(true);
    } else {
      this.setUserAuthentitated(false);
    }
  }

  doLogout() {
    this.setUserAuthentitated(false);
  }

  userIsAuthenticated() {
    return this.userAuthenticated;
  }

  setUserAuthentitated(authentitated: boolean) {
    this.userAuthenticated = authentitated;
    this.showNavBarEmitter.emit(authentitated);

    if (authentitated) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
