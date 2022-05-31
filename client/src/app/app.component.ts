import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ECommerce Application';
  products: any;

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.http.get("https://localhost:44305/api/products/GetProducts?PageSize=50").subscribe((response: any) => {
      console.log(response);
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }
}
