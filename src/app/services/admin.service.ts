import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/';
  private header = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {},
  };

  constructor(private http: HttpClient) {}

  public deleteCompany() {

  }

  public allCompanies() {

  }

  public getProduct() {

  }

  public deleteProduct() {

  }

  public updateProduct() {

  }

  public registerEmployee() {

  }
}
