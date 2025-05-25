import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateEmployee } from '../../../core/interfaces/CreateEmployee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  createEmployee($event: MouseEvent) {


    this.adminService.createEmployee(this.employeeForm.value).subscribe((resp: Boolean) => {
      if (resp) {
        Swal.fire(
          "El empleado se registro con éxito",
          "Empleado registrado",
          "success"
        )
      } else {
        Swal.fire(
          'No se pudo crear el empleado',
          'Empleado no registrado',
          'error'
        );
      }
    })
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  constructor(
    private adminService: AdminService,
    private router: Router,
    private fb: FormBuilder
  ) {}
}
