import { Component, OnInit, Input } from '@angular/core';

import { Login } from '../login';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    username: null,
    password: null
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.login.username);
    console.log(this.login.password);
    this.userService.doLogin(this.login.username, this.login.password).subscribe (users => console.log(users))
  }
}
