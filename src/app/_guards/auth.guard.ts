import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthContext } from '../../environments/authcontext';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (AuthContext.isLogged) {
        return true;
      } else {
        this.router.navigate(['/login'], {
          queryParams: {
            return: state.url
          }
        });
        return false;
      }
  }
}
