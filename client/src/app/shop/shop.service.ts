import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IProductType } from '../shared/models/productTypes';
import { IBrand } from '../shared/models/brand';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = "https://localhost:44305/api/"
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IPagination>(this.baseUrl + 'products/GetProducts?pageSize=50');
  }

  getProductBrand() {
    return this.http.get<IBrand[]>(this.baseUrl + 'Products/GetProductBrands');
  }

  getProductTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'Products/GetProductTypes');
  }
}
