import { Product } from './../models/product.module';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-price-image',
  templateUrl: './price-image.component.html',
  styleUrls: ['./price-image.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PriceImageComponent implements OnInit {
  @Input() productI: Product;  
  constructor() { }
  ngOnInit() {
  }

}
