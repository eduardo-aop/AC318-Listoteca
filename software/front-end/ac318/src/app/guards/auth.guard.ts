import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<true> | boolean {
      if (this.loginService.userIsAuthenticated()) {
        return true;
      }

      this.router.navigate(['/login']);
      return false;
  }
}
