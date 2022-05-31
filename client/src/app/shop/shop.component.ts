import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/product';
import { IPagination } from '../shared/models/pagination';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  products: IProduct[];

  ngOnInit(): void {
    this.shopService.getProducts()
      .subscribe((response: IPagination) => {
        this.products = response.data;
      }, error => {
        console.log(error);
      });
  }
}
