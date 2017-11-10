import { Product } from './models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  kartProducts:Product[];
  title = 'app';
  constructor() {
    this.products = [
      new Product('MYSHOES', 'Black Running shoes', '/assets/images/products/black-shoes.jpg', ['men', 'shoes', 'running shoes'], 100.99, 'Great description for shoes'),
      new Product('JACKET', 'Blue jacket', '/assets/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jacket & vests'], 145.99, 'Great description for vest'),
      new Product('NICEHAT', 'A nice black hat', '/assets/images/products/black-hat.jpg', ['men', 'Accessories', 'Hats'], 30.99, 'Great description for Hat'),
    ];
    this.kartProducts = [];
  }
  productChanged(product: Product): void {
  this.addToKart(product);

  }
  addToKart(product: Product): void {
    this.kartProducts.push(product);
  }
}
