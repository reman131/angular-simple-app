import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prodcut } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Prodcut[]>('https://my-json-server.typicode.com/reman131/mock-server/products?id=9');
  }
}
