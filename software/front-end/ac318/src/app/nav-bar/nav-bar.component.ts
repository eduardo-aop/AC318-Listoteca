import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input('idClass') idClass: number;

  constructor() { }

  ngOnInit() {
    console.log(this.idClass);
  }

  menuClick() {
    console.log('menu clicked');
  }
}
