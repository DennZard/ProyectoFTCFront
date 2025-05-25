import { Company } from './../core/models/Company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/models/Product';
import { UserLogin } from '../core/interfaces/UserLogin';
import { CompanyCreate } from '../core/interfaces/CompanyCreate';
import { CreateProduct } from '../core/interfaces/CreateProduct';

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

  public createCompany(companyCreate: CompanyCreate) {
    return this.http.post(`${this.baseUrl}company/save`, {...companyCreate}, this.header);
  }

  public createProduct(product: CreateProduct) {
    return this.http.post(`${this.baseUrl}product/save`, {...product}, this.header);
  }

  public updateCompany(companyCreate: CompanyCreate, id: number) {
    return this.http.put(`${this.baseUrl}company/update?id=` + id, {...companyCreate}, this.header);
  }

  public getProducts(id: number) {
    return this.http.get<Product[]>(`${this.baseUrl}company/products?companyId=` + id, this.header);
  }


 }
