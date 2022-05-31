import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/product';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IProductType } from '../shared/models/productTypes';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  products: IProduct[];
  brands: IBrand[];
  productTypes: IProductType[];

  ngOnInit(): void {
    this.getProducts();
    this.getProductBrand();
    this.getProductTypes();
  }

  getProducts() {
    this.shopService.getProducts()
      .subscribe((response: IPagination) => {
        this.products = response.data;
      }, error => {
        console.log(error);
      });
  }

  getProductBrand() {
    this.shopService.getProductBrand()
      .subscribe((response: IBrand[]) => {
        this.brands = response;
      }, error => {
        console.log(error);
      });
  }

  getProductTypes() {
    this.shopService.getProductTypes()
      .subscribe((response: IProductType[]) => {
        this.productTypes = response;
      }, error => {
        console.log(error);
      });
  }
}
