import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private baseUrl = 'http://localhost:8080/';
  private header = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {},
  };

  constructor(private http: HttpClient) {}

  public createCompany() {

  }

  public createProduct() {

  }

  public updateCompany() {

  }

  public getProducts() {

  }


 }
