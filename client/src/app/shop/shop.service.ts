import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IProductType } from '../shared/models/productTypes';
import { IBrand } from '../shared/models/brand';

import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = "https://localhost:44305/api/"
  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number, sort?: string) {
    let params = new HttpParams();

    if (brandId !== 0) {
      params = params.append('brandId', brandId.toString());
    }

    if (typeId !== 0) {
      params = params.append('typeId', typeId.toString());
    }

    if (sort) {
      params = params.append('sort', sort);
    }

    console.log(params);

    return this.http.get<IPagination>(this.baseUrl + 'Products/GetProducts', { observe: 'response', params })
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getProductBrand() {
    return this.http.get<IBrand[]>(this.baseUrl + 'Products/GetProductBrands');
  }

  getProductTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'Products/GetProductTypes');
  }
}
