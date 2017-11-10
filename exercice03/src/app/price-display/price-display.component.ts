import { Product } from './../models/product.module';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PriceDisplayComponent implements OnInit {
  @Input() productP: Product[];  
  constructor() { }

  ngOnInit() {
  }

}
