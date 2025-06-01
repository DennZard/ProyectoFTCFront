import { AuthService } from './../../../services/auth.service';
import { UserLogin } from './../../../core/interfaces/UserLogin';
import { CompanyService } from './../../../services/company.service';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Company } from '../../../core/models/Company';
import { User } from '../../../core/models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyCreate } from '../../../core/interfaces/CompanyCreate';
import Swal from 'sweetalert2';
import { DesplegableService } from '../../../shared/desplegable/desplegable.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-create-company',
  standalone: false,
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css',
})
export class CreateCompanyComponent implements OnInit {
  user: User;
  createCompany: FormGroup;
  sidebarOpen = false;
  private subscription: Subscription;


  constructor(
    private router: Router,
    private companyService: CompanyService,
    private authService: AuthService,
    private fb: FormBuilder,
    private desplegableService: DesplegableService,
    private userService: UserService
  ) {}

  saveCompany($event: MouseEvent) {
    const email = this.authService.user.email;
    const dto: CompanyCreate = {
      name: this.createCompany.value.companyName,
      owner: {
        email: email || '',
        password: this.createCompany.value.password,
      },
    };
    this.companyService.createCompany(dto).subscribe((creada: Boolean) => {
      if (creada) {
        Swal.fire(
          'Compañia creada con éxito',
          'La compañia se creo con',
          'success'
        );
        this.userService.login({email: this.user.email, password: this.createCompany.value.password}).subscribe(
                (data) => {
                  sessionStorage.setItem('user', JSON.stringify(data));
                },
                (err) => {
                  Swal.fire(
                    'Error al iniciar sesion',
                    'El usuario o la contraseña son incorrectos',
                    'error'
                  );
                }
              );
          this.user = User.getUser()
          this.router.navigateByUrl("main/compania/productos")
      } else {
        Swal.fire(
          'Error al crear la compañia',
          'Revise los datos del formulario',
          'error'
        );
      }
    });
  }

  ngOnInit(): void {
    console.log(sessionStorage.getItem("user"))
    this.subscription = this.desplegableService.isSidebarOpen$.subscribe(
      (open) => {
        this.sidebarOpen = open;
      }
    );
    this.sidebarOpen = false;
    this.user = User.getUser();
    this.createCompany = this.fb.group({
      companyName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
