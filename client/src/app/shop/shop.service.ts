import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IProductType } from '../shared/models/productTypes';
import { IBrand } from '../shared/models/brand';

import { map, delay } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = "https://localhost:44305/api/"
  constructor(private http: HttpClient) { }

  getProducts(shopParams?: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    params = params.append('sort', shopParams.sort);

    params = params.append('pageIndex', shopParams.pageNumber.toString());

    params = params.append('pageSize', shopParams.pageSize.toString());

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
