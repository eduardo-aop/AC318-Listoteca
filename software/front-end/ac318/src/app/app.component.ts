import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ac318';

  showMenu: boolean = false;

  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginService.showNavBarEmitter.subscribe(
      show => {
        this.showMenu = show;
      }
    );
  }

  logout() {
    this.loginService.doLogout();
  }
}
