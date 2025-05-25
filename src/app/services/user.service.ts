import { Injectable } from '@angular/core';
import { User } from './../core/models/User';
import { HttpClient } from '@angular/common/http';
import { Response } from '../core/models/Response';
import { tap } from 'rxjs';
import { UserLogin } from '../core/interfaces/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/';
  private header = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {},
  };

  constructor(private http: HttpClient) {}

  userData: any;

  public register(user: User) {
    console.log({ ...user });


    return this.http
      .post<any>(`${this.baseUrl}user/register`, { ...user }, this.header)
      .pipe(
        tap((data: Response) => {
          if (data.Error) throw data.Error;
          sessionStorage.setItem('isLogedUser', '1');
          this.userData = JSON.stringify(`${data.Data}`);
          console.log(JSON.parse(this.userData))
          sessionStorage.setItem('userId', `${data.Data}`);
          return data;
        })
      );
  }

  public login(user: UserLogin) {
    return this.http
      .post<any>(`${this.baseUrl}user/login`, { ...user }, this.header)
      .pipe(
        tap((data: Response) => {
          if (data.Error) throw data.Error;
          return data;
        })
      );
  }
}
