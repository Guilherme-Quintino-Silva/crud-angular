import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/products.interface';
import { UrlConfig } from 'src/env/UrlConfig';

@Injectable({
  providedIn: 'root'
})
export class InsertAnDgetProductsService {
  constructor(
    public http: HttpClient,
    public urlConfig: UrlConfig
  ) { }

  public insertProduct(object: Product): Observable<Product> {
    return this.http.post<Product>(this.urlConfig.insert, object);
  }

  public getProduct(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.urlConfig.insert);
  }
  public readProduct(id: any): Observable<Array<Product>> {
    const HTTP = `${ this.urlConfig.insert }/${ id }`;
    return this.http.get<Array<Product>>(HTTP);
  }
  public updateProduct(id: any, product: Product): Observable<Array<Product>> {
    const HTTP = `${ this.urlConfig.insert }/${ id }`;
    return this.http.put<Array<Product>>(HTTP, product);
  }

  public delProduct(id: number): Observable<Array<Product>> {
    const HTTP = `${ this.urlConfig.insert }/${ id }`;
    console.log(HTTP);
    return this.http.delete<Array<Product>>(HTTP);
  }
}
