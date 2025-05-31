import { AuthEmployeeService } from './../../services/authEmployee.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DesplegableService } from './desplegable.service';
import { User } from '../../core/models/User';

@Component({
  selector: 'app-desplegable',
  standalone: false,
  templateUrl: './desplegable.component.html',
  styleUrl: './desplegable.component.css',
})
export class DesplegableComponent implements OnInit {
  isOpen = false;
  usuario: any;
  openSubMenu: string | null = null;
  showEmployee:boolean

  toggleSubMenu(menu: string): void {
    this.openSubMenu = this.openSubMenu === menu ? null : menu;
  }

  logOff () {
    sessionStorage.removeItem("user")
    this.router.navigateByUrl("main/login")
  }

  constructor(
    private desplegableService: DesplegableService,
    private router: Router,
    private authService: AuthService,
    private authEmployeeService: AuthEmployeeService
  ) {}
  ngOnInit(): void {
    console.log(this.authService.user)
    if (this.isUser()) {
      console.log("Pues soy un usuario")
      this.usuario = this.authService.user;
    }
    if (this.authEmployeeService.employee) {
      console.log("Pues soy un empleado")
      this.usuario = this.authEmployeeService.employee
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  goToLogin() {
    this.router.navigateByUrl('/main/login');
  }

  goToRegister() {
    this.router.navigateByUrl('/main/register');
  }

  goToMain() {
    this.router.navigateByUrl('/main/inicio');
  }
  goToProducts() {
    this.router.navigateByUrl('/main/producto/all');
  }

  isEmployee(){
     if (this.authEmployeeService.employee) {
      console.log("Soy un empleado")
      return true
    }
    console.log("No soy un empleado")
     return false
  }

  isUser() {
    if(this.authService.user?.roles) {
      console.log("Soy un usuario")
      return true
    }
    console.log("No soy un usuario")
    return false
  }
  isAdmin() {
    if(this.isUser()) {
      if (this.usuario?.hasRole("Admin")) {
        return true
      }
    }
    return false
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.desplegableService.setSidebarState(this.isOpen);
  }
}
