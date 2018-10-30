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
  private userNameError = false
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
  }

  doLogin() {
    console.log(this.user);
    if (this.user.name != '' && this.user.password != '') {
      this.userNameError = !this.loginService.doLogin(this.user);
    } else {
      this.userNameError = true;
    }
  }
}
