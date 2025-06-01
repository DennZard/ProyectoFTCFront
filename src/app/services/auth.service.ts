import { Injectable } from '@angular/core';
import { User } from '../core/models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  get isLogged(): boolean {
    var user = JSON.parse(sessionStorage.getItem("user"))
    console.log(user)
    if (user && user?.data?.user?.roles) {
      return true;
    } else {
      console.log(user?.data?.user?.password);
      return false;
    }
  }

  get user() {
    var user = JSON.parse(sessionStorage.getItem('user'))?.data?.user;
    console.log(user?.password);
    if (user?.roles) {
      const object = JSON.parse(sessionStorage.getItem('user'));
      const userObject = object.data.user;
      return new User(
        userObject.id,
        userObject.username,
        '',
        userObject.email,
        userObject.phone,
        userObject.company,
        userObject.roles,
        userObject.money
      );
    }
    return null
  }

  hasRole(role: string): boolean {
    if (this.isLogged) {
      console.log(this.user?.hasRole)
      return this.user.hasRole(role);
    } else {
      console.log(this.isLogged)
      return false;
    }
  }
}
