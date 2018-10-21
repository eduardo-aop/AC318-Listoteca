import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor() { }

  getExercises() {
    return [
      { id: 0, question: "Testando"},
      { id: 1, question: "Ja era"},
      { id: 2, question: "Ja era"},
      { id: 3, question: "Ja era"},
      { id: 4, question: "Ja era"}
    ];
  }
}
