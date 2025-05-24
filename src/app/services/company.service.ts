import { Company } from './../core/models/Company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/models/Product';

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

  public createCompany(company: Company) {
    // return this.http.post(`${this.baseUrl}company/save`, {..company});
  }

  public createProduct(product: Product) {

  }

  public updateCompany(company: Company) {

  }

  public getProducts(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/company/products?companyId=` + id);
  }


 }
