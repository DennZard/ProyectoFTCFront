import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeLogin } from '../core/interfaces/EmployeeLogin';
import { Employee } from '../core/models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/';
  private header = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {},
  };

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(`${this.baseUrl}employees/all`);
  }

  public loginEmployee(employee: EmployeeLogin) {
    return this.http.post<Employee>(
      `${this.baseUrl}employees/login`,
      { ...employee },
      this.header
    );
  }
}
