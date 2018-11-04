import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from './user';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8000';
  private userAuthenticated = false;
  showNavBarEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) { }

  doLogin(login: User): Observable<User> {
    console.log(this.url);
    return this.http.post<User>(this.url + '/auth', login, httpOptions)
    .pipe(
      tap((auth: User) => {
      })
    );
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
