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
}
