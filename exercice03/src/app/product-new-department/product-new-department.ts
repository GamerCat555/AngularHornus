import { Product } from './../models/product.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-new-department',
    template: `<div class="product-department">
    <span *ngFor=let name of product.department;let i="index">
        <a href="#">{{name}}</a>
        <span>{{i <(product.department.length-1) ? '>' :''}}</span>
    </span>
    </div>`
})

export class ProductNewDepartmentComponent implements OnInit {
    @Input() product: Product[];  
    constructor(){}
     ngOnInit() {}
}
   