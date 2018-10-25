import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User()

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  doLogin() {
    this.loginService.doLogin(this.user);
    console.log(this.user);
  }
}
