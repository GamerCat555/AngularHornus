import { Product } from '../models/product.module';
import { Component, OnInit, ViewEncapsulation, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductRowComponent implements OnInit {
  @HostBinding('attr.class') cssclass= 'item';
  @Input() product: Product;  
  constructor() { }

  ngOnInit() {
  }

}
