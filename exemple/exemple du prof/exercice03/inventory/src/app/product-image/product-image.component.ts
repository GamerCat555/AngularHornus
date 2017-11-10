import { Product } from '../models/product.model';
import { Component, Input, OnInit, HostBinding } from '@angular/core';
@Component({
    selector: 'app-product-image',
    template : `
    <img src="{{product.image}}" alt="{{product.description}}" />
    `
})

export class ProductImageComponent implements OnInit {
    @Input() product: Product;
    @HostBinding('attr.class') cssClass= 'ui small image';
    constructor() {
    }

    ngOnInit() {}
}
