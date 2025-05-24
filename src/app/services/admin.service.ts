import { Employee } from './../core/models/Employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/models/Product';
import { Company } from '../core/models/Company';

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

  public deleteCompany(id: number) {
    return this.http.delete(`${this.baseUrl}/company/byId` + id)
  }

  public allCompanies() {
    return this.http.get<Company>(`${this.baseUrl}/company/all`)
  }

  public deleteProduct(id:number) {
    return this.http.delete(`${this.baseUrl}/product/byId?id=` + id)
  }

  public updateProduct(product: Product) {

  }

  public registerEmployee(employee: Employee) {

  }
}
