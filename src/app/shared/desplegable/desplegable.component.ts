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
export class DesplegableComponent implements OnInit{
  isOpen = false;
  usuario: User;

  constructor(
    private desplegableService: DesplegableService,
    private router:Router,
    private authService:AuthService
  ) {}
  ngOnInit(): void {
    this.usuario = this.authService.user
  }

  goToLogin() {
    this.router.navigateByUrl("/main/login")
  }

  goToRegister() {
    this.router.navigateByUrl('/main/register');
  }

  goToMain() {
    this.router.navigateByUrl("/main/inicio")
  }
  goToProducts() {
    this.router.navigateByUrl("/main/producto/all")
  }
  // goToAdmin() {
  //   this.router.navigateByUrl("/admin")
  // }
  // goToCompany() {
  //   this.router.navigateByUrl("/main")
  // }
  // goToEmployee() {
  //   this.router.navigateByUrl("/main")
  // }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.desplegableService.setSidebarState(this.isOpen);
  }
}
