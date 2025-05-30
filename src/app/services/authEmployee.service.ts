import { Injectable } from '@angular/core';
import { Employee } from '../core/models/Employee';

@Injectable({
  providedIn: 'root',
})
export class AuthEmployeeService {
  constructor() {}

  get isLogged(): boolean {
    var user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user);
    if (user && user?.name) {
      return true;
    } else {
      console.log(user?.name);
      return false;
    }
  }

  get employee() {
      var employee = JSON.parse(sessionStorage.getItem('user'));
      console.log(employee?.name);
      if (employee?.name) {
        const object = JSON.parse(sessionStorage.getItem('user'));
        const userObject = object;
        return new Employee(
          userObject.id,
          userObject.name,
          userObject.lastName,
          userObject.email,
          userObject.phone,
          userObject.active
        );
      }
      return null;
  }
}
