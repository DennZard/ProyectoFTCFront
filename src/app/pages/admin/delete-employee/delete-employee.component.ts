import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../core/models/Employee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-employee',
  standalone: false,
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css',
})
export class DeleteEmployeeComponent implements OnInit {
  deleteUsuario(id: number) {
    console.log(id)
    this.adminService.deleteEmployee(id).subscribe((resp: Boolean) => {
      if (resp) {
        Swal.fire('Empleado eliminado', 'Empleado eliminado', 'success');
      }
      else {
        Swal.fire("El empleado no se pudo elimar", "Empleado no eliminado", "error")
      }
    })
    setTimeout(() => {
      this.getEmployees();
    }, 1000);
  }

  employees: Employee[] = [];

  constructor(
    private router: Router,
    private adminService: AdminService,
    private employeeService: EmployeeService
  ) {}


  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((employee: Employee[]) => {
      this.employees = employee;
      console.log(this.employees);
    });
  }
}
