import { Product } from './../models/product.model';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-cart-price',
  templateUrl: './cart-price.component.html',
  styleUrls: ['./cart-price.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartPriceComponent implements OnInit {
  @Input() kartProducts: Product[];
  constructor() { }

  ngOnInit() {
  }
  calculateTotal() {
    return this.kartProducts.reduce((previous: number, current: Product): number => {
       return previous + current.price;
    }, 0);
  }
  arrangedKartProducts() {
    return this.kartProducts;
  }
}
