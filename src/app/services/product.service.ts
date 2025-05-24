import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/product/';
  private header = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {},
  };

  constructor(private http: HttpClient) {}

  public buyProduct(id: number, money:number) {
    return this.http.put(`${this.baseUrl}buy`, {id, money})
  }

  public getDetails(id: number) {
    return this.http.get<Product>(`${this.baseUrl}details?id=` + id);
  }

  public filterByPrefix(prefix: String) {
    return this.http.get<Product>(`${this.baseUrl}prefix?rpefix=` + prefix);
  }

  public getAll() {
    return this.http.get<Product[]>(`${this.baseUrl}all`, this.header);
  }
}
