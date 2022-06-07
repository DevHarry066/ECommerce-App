import { BasketService } from 'src/app/basket/basket.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IBasketTotals } from '../../models/basket';

@Component({
  selector: 'app-ordertotal',
  templateUrl: './ordertotal.component.html',
  styleUrls: ['./ordertotal.component.scss']
})
export class OrdertotalComponent implements OnInit {

  basketTotal$: Observable<IBasketTotals>;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketTotal$ = this.basketService.basketTotal$;
  }

}
