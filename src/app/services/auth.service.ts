import { Injectable } from '@angular/core';
import { User } from '../core/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  get isLogged():boolean {
     if (!sessionStorage.getItem("user")) {
      return true
    } else {
      return false
    }
  }

  get user(){
      const object = JSON.parse(sessionStorage.getItem('user'));
      const userObject = object.data.user;
      return new User(
        userObject.id,
        userObject.username,
        '',
        userObject.email,
        userObject.phone,
        userObject.company,
        userObject.roles
      );
  }

  hasRole(role: string):boolean {
    if (!this.isLogged) {
      return this.user.hasRole(role);
    } else {
      return false
    }
  }

}
