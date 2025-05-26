import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delivery } from '../core/models/Delivery';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private baseUrl = 'http://localhost:8080/';
  private header = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {},
  };

  constructor(private http: HttpClient) {}

  getDeliveriesByCustomerId(id:number) {
    return this.http.get<Delivery[]>(
      `${this.baseUrl}deliveries/customer?id=` + id,
      this.header
    );
  }
}
