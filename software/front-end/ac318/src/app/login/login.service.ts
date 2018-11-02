import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from './user';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

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
        console.log(auth);
        console.log('OK')
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

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
