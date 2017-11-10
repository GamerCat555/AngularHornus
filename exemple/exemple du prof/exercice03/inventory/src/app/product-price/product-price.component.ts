import { Product } from './../models/product.model';
import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-product-price',
    template: `<div class="price-display">\${{product.price}}</div>`
})

export class ProductPriceComponent implements OnInit {
@Input() product: Product;
    constructor() {

}
ngOnInit() {}
}
