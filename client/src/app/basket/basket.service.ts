import { IBasket } from './../shared/models/basket';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  private basketSource = new BehaviorSubject<IBasket>(null);
  public basket$ = this.basketSource.asObservable();

  getBasket(id:number) {
    return this.http.get(this.baseUrl + 'basket?id=' +id)
    .pipe(
      map((basket: IBasket) => {
        this.basketSource.next(basket);
      })
    );
  }

  setBasket(basket: IBasket) {
    return this.http.post(this.baseUrl + 'basket', basket)
    .subscribe((response: IBasket) => {
      this.basketSource.next(response);
    }, error => {
    console.error();
    });
  }

  getCurrentBasketValue() {
    return this.basketSource.value;
  }
}
