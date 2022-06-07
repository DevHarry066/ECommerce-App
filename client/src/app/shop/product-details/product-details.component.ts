import { BasketService } from 'src/app/basket/basket.service';
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
  quantity = 1;
  constructor(private shopService: ShopService,
    private activeRoute: ActivatedRoute,
    private breadcrumbsService: BreadcrumbService,
    private basketService: BasketService) {
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

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementItem() {
    this.quantity = this.quantity + 1;
  }

  decrementItem() {
    if(this.quantity > 1) {
      this.quantity -= 1;
    }
  }
}
