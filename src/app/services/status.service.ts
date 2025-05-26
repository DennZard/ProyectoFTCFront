import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status } from '../core/models/Status';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private baseUrl = 'http://localhost:8080/';
  private header = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {},
  };

  constructor(private http: HttpClient) {}

  getStatuses() {
    return this.http.get<Status[]>(`${this.baseUrl}status/all`, this.header);
  }
}
