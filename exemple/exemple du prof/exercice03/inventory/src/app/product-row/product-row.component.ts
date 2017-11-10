import { Product } from './../models/product.model';
import { Component, OnInit, Input, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductRowComponent implements OnInit {
@HostBinding('attr.class') cssClass= 'item';
@Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
