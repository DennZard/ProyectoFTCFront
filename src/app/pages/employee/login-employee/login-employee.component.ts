import { EmployeeLogin } from './../../../core/interfaces/EmployeeLogin';
import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../core/models/Employee';

@Component({
  selector: 'app-login-employee',
  standalone: false,
  templateUrl: './login-employee.component.html',
  styleUrl: './login-employee.component.css',
})
export class LoginEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  loginEmployee($event: MouseEvent) {

    this.employeeService.loginEmployee(this.employeeForm.value).subscribe((empl: Employee) => {
      sessionStorage.setItem('user', JSON.stringify(empl));
      console.log(sessionStorage.getItem('user'));
    });
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }
}
