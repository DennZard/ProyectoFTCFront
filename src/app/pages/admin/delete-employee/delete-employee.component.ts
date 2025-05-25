import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../core/models/Employee';

@Component({
  selector: 'app-delete-employee',
  standalone: false,
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css',
})
export class DeleteEmployeeComponent implements OnInit {
  deleteUsuario(_t15: any) {
    throw new Error('Method not implemented.');
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
