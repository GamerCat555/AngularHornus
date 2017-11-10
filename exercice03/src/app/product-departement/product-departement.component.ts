import { Product } from './../models/product.module';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-product-departement',
  templateUrl: './product-departement.component.html',
  styleUrls: ['./product-departement.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDepartementComponent implements OnInit {
@Input() ProductCom: Product;
  constructor() { }

  ngOnInit() {
  }

}
