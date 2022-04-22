import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    // Inyección de Servicio de HttpClient
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }

}
