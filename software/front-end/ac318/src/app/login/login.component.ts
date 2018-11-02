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
  private emptyFields = false
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
  }

  doLogin() {
    console.log("login")
    console.log(this.user.name);
    if ((this.user.name != '' && this.user.name != undefined) && 
    (this.user.password != '' && this.user.password != undefined)) {
      this.loginService.doLogin(this.user).subscribe(
        data => {
            console.log("POST Request is successful ", data);
            if (data == null || data == undefined) {
              this.userNameError = true;
              this.emptyFields = false;
              this.loginService.setUserAuthentitated(false);
            } else {
              this.userNameError = false;
              this.loginService.setUserAuthentitated(true);
            }
        },
        error => {
            console.log("Rrror", error);
            this.userNameError = true;
            this.emptyFields = false;
        })
    } else {
      this.emptyFields = true;
      this.userNameError = false;
    }
  }
}
