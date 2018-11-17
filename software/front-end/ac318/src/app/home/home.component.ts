import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '1234'.split('').map((x, i) => {
    const num = i;
    console.log(num);
    return {
      url: `../../assets/${num}.jpg`,
      title: `${num}`
    };
  });
 
  constructor() { }
 
  indexChanged(index) {
    console.log(index);
  }

  ngOnInit() {
  }

}
