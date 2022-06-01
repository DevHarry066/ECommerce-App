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
  brandSelected = 0;
  typeSelected = 0;
  sortSelected = 'By Name';
  sortOptions = [
    { name: "By Name", value: 'name' },
    { name: "Price: Low to High", value: 'priceAsc' },
    { name: "Price: High to Low", value: 'priceDesc' }
  ];

  ngOnInit(): void {
    this.getProducts();
    this.getProductBrand();
    this.getProductTypes();
  }

  getProducts() {
    console.log(this.brandSelected);
    console.log(this.typeSelected);
    this.shopService.getProducts(this.brandSelected, this.typeSelected, this.sortSelected)
      .subscribe((response: IPagination) => {
        this.products = response.data;
      }, error => {
        console.log(error);
      });
  }

  getProductBrand() {
    this.shopService.getProductBrand()
      .subscribe((response: IBrand[]) => {
        this.brands = [{ id: 0, name: 'All' }, ...response];
      }, error => {
        console.log(error);
      });
  }

  getProductTypes() {
    this.shopService.getProductTypes()
      .subscribe((response: IProductType[]) => {
        this.productTypes = [{ id: 0, name: 'All' }, ...response];
      }, error => {
        console.log(error);
      });
  }

  onBrandSelected(brandId: number) {
    this.brandSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.typeSelected = typeId;
    this.getProducts();
  }

  onSortSelected(sort: string) {
    this.sortSelected = sort;
    this.getProducts();
  }
}
