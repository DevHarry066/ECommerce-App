import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Home Page');
    console.log('change');
    //https://login.microsoftonline.com/de08c407-19b9-427d-9fe8-edf254300ca7/saml2?SAMLRequest=fZDNTsMwEIRfJfLdievmz1YbqVAqhQYEbVUBF%2BQ6TuoqWYfYkXh8knIpFy4rrbTzzc4srGibjq8Gd4ad%2BhqUdd56HBqE0waW6OxcZ3kQNKbW4Lda9saayhloNChfmjYoFUllSBI8YyeGQ5qUmFUqxaqsaBTOCZEiCSYbiryj6u0VS32CvHy9RDlpjvvqjoW6eE8Y%2BXxLd2URdZrEc1ynZ70pum2ck5quIXqGjXi8vCaXh1MnDzQutyPD2kHlYJ0AN2IJpZhEmLIDifmM8JD5cTT7QN5324Dl17RLNPTAjbDachCtstxJvl89FXz8ine9cUaaBmWL6ZpfDfob%2Ff9yYa3qp%2BpQ9qKhvjcASrpFcMPKfre%2FrWc%2F&RelayState=I0lVSfB94iLY790_X8RdL5pi063-g8hiFLpK6I0g2Dn5NnFaJjQ7jEbpcT26dK
  }
}
