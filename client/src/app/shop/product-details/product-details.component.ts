import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { IProduct } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct;
  constructor(private shopService: ShopService,
    private activeRoute: ActivatedRoute,
    private breadcrumbsService: BreadcrumbService) {
    this.breadcrumbsService.set('@productDetails', '');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProductById((+this.activeRoute.snapshot.paramMap.get('id'))).subscribe(productResponse => {
      this.product = productResponse;
      this.breadcrumbsService.set('@productDetails', productResponse.name);
    }, error => {
      console.log(error);
    });
  }
}
