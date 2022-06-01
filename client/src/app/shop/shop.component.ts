import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/product';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IProductType } from '../shared/models/productTypes';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  @ViewChild('search', { static: false }) searchTerm: ElementRef;
  products: IProduct[];
  brands: IBrand[];
  productTypes: IProductType[];
  shopParams = new ShopParams();
  totalCount: number;

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
    this.shopService.getProducts(this.shopParams)
      .subscribe((response: IPagination) => {
        this.products = response.data;
        this.shopParams.pageSize = response.pageSize;
        this.shopParams.pageNumber = response.pageIndex;
        this.totalCount = response.count;
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
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(sort: string) {
    this.shopParams.sort = sort;
    this.getProducts();
  }

  onPageChanged(event: any) {
    if (this.shopParams !== event.page) {
      this.shopParams.pageNumber = event.page;
      this.getProducts();
    }
  }

  onSearch() {
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }
}
