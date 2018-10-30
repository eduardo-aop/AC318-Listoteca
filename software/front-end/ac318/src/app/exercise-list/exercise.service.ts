import { Injectable } from '@angular/core';
import { Exercise } from './exercise';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private url = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getExercisesFromList() {
    return [
      { id: 0, question: "Testando", answers: ['123', '311', '555'] },
      { id: 1, question: "Ja era", answers: ['123', '311', '555'] },
      { id: 2, question: "Ja era", answers: ['123', '311', '555'] },
      { id: 3, question: "Ja era", answers: ['123', '311', '555'] },
      { id: 4, question: "Ja era", answers: ['123', '311', '555'] }
    ];
  }

  getExerciseList() {
    return [
      { id: 0, theme: "sei la", subject: 'comp grafica'},
      { id: 1, theme: "qualquer coias", subject: 'compiladores'},
      { id: 2, theme: "outra coisa", subject: 'SO'},
      { id: 3, theme: "sei la mais o que", subject: 'BD'},
      { id: 4, theme: "nada de mais", subject: 'Eng SW'},
      { id: 5, theme: "eita sei la", subject: 'POO'}
    ];
  }

  addExercise(exercise: Exercise): Observable<Exercise> {
    this.url = this.url + "/exercise";
    return this.http.post<Exercise>(this.url, exercise, httpOptions).pipe(
      tap((exercise: Exercise) => console.log('Added'))
    );
  }
}
