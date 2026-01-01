//src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getFakeStoreItems(): Observable<any[]> {
    return this.http.get<any[]>('https://dummyjson.com/products');
  }
  getSingleProduct(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}

