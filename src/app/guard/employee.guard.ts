import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthEmployeeService } from "../services/authEmployee.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class employeeGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authEmployeeService.isLogged && !this.authEmployeeService.employee) {
      console.log('El usuario no esta logeado');
      this.router.navigateByUrl('/main/empleado/login');
      return false;
    }
    return true;
  }

  constructor(
    private authEmployeeService: AuthEmployeeService,
    private router: Router
  ) {}
};
