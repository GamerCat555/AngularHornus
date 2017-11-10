import { Product } from './../models/product.module';
import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-product-new-image',
    template:`
    <img src="{{product.image}}" alt="{{product.name}}"/> `,
    encapsulation: ViewEncapsulation.None
    
})

export class ProductNewImageComponent implements OnInit {
    @Input() product : Product;
    @HostBinding('attr.class') cssClass= 'ui small image';
    constructor() { }

    ngOnInit() { }
}