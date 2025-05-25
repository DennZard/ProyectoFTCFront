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

@Component({
  selector: 'app-create-company',
  standalone: false,
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css',
})
export class CreateCompanyComponent implements OnInit {
  user: User;
  createCompany: FormGroup;

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private authService: AuthService,
    private fb: FormBuilder
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
    this.user = User.getUser();
    this.createCompany = this.fb.group({
      companyName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
