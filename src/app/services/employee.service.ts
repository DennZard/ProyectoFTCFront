import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeLogin } from '../core/interfaces/EmployeeLogin';

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

  public changeDeliveryStatus(id: number, ) {

  }

  public loginEmployee(employee: EmployeeLogin) {

  }

}
