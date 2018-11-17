import { Injectable } from '@angular/core';
import { Exercise } from './exercise';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { List } from './list';
import { Constants } from '../constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                            'responseType': 'text' })
};

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private url = Constants.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  getExercisesFromList(listId: number): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url + '/questionList/' + listId);
  }

  getAllList(): Observable<List[]> {
    var currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser);
    return this.http.get<List[]>(this.url + '/list?teacherId=' + currentUser.id);
  }

  addExercise(exercise: Exercise): Observable<any> {
    console.log("exercise");
    return this.http.post(this.url + '/question', exercise, {
      responseType: 'text',
    });
  }

  generateList(list: any): Observable<any> {
    console.log("exercise");
    return this.http.post(this.url + '/list', list, {
      responseType: 'text',
    });
  }

  updateListName(list: any): Observable<any> {
    console.log("exercise");
    return this.http.put(this.url + '/list/', list, {
      responseType: 'text',
    });
  }

  deleteList(id: number): Observable<any> {
    console.log("exercise");
    return this.http.delete(this.url + '/list/' + id, {
      responseType: 'text',
    });
  }

  loadExerciseClasses(text: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/class/' + text);
  }
 
  loadExerciseThemes(text: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/theme/' + text);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
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
