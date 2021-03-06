import { CheckoutRoutingModule } from './../checkout/checkout-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasketRoutingModule } from './basket-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';


@NgModule({
  declarations: [
    BasketComponent,
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    SharedModule,
  ]
})
export class BasketModule { }
