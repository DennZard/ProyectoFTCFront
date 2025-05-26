import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];
    // console.log(sessionStorage.getItem("user"))
    if(this.authService.isLogged) {
      console.log("No esta logeado")
      this.router.navigate(['/main/login']);
      return false;
    }

    if (!this.authService.hasRole(expectedRole)) {
      this.router.navigate(['/main/no-authorized']);
      return false;
    }
    return true;
  }

  constructor(private authService: AuthService, private router: Router) {}
}



