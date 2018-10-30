import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  private classes: any[] = [{ id: 0, subject: 'POO', teacher: 'Teacher'}]

  constructor() { }

  ngOnInit() {
  }

}
