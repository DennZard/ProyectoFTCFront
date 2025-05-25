import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../core/models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/category';
  private header = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {},
  };

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Category[]>(`${this.baseUrl}/all`, this.header);
  }
}
