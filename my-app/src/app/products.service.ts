import { inject, Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { APP_SETTINGS } from './app.settings';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable(/* {
  providedIn: 'root' // tree shakable
} */)

export class ProductsService {
  
  private productsUrl = inject(APP_SETTINGS).apiUrl+'/products';
  private http = inject(HttpClient);
  private products: Product[] = [];


  getProducts(): Observable<Product[]>{
    const options = new HttpParams().set('limit', 10);
    return this.http.get<Product[]>(this.productsUrl, {params: options});
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.productsUrl}/${id}`)
  }
  
}
