import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrdertotalComponent } from './components/ordertotal/ordertotal.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrdertotalComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrdertotalComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
