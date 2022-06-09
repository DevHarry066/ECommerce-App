import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/models/product';
import { IPagination } from './shared/models/pagination';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ECommerce Application';

  constructor(private basketService: BasketService,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadBasketItem();
    this.loadCurrentUser();
  }

  loadBasketItem() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('Basket initialized');
      }, error => {
        console.log(error);
      });
    }
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    if (token) {
      this.accountService.loadCurrentUser(token).subscribe(() => {
        console.log('User loaded');
      }, error => {
        console.log(error);
      });
    }
  }
}
