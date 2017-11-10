import { Product } from './../models/product.model';
import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {
@Input() productList: Product[];
@Output() onProductSelected: EventEmitter<Product>;
  constructor() {
    this.onProductSelected = new EventEmitter();
   }
  clicked(product) {
    console.log('internal list ', product);
    this.onProductSelected.emit(product);
  }
  ngOnInit() {
  }

}
