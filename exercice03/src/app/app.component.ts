import { Component } from '@angular/core';
import { Product } from './models/product.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Inventory App';
  product: Product[];
  kartProducts:Product[];
  point:number[];
  constructor(){
    this.product =[
      new Product('black running shoes', '/assets/images/shoes.jpg',  'SKU #MYSHOES', 100, ['men', 'shoes', 'super'],"test"),
      new Product('blue Jacket', '/assets/images/pull.jpg', 'SKU #NEATOJACKET', 1000, ['men', 'shoes', 'super'] ,"test"),
      new Product('A Nice Black Hat', '/assets/images/cap.jpg', 'SKU #NICEHAT', 15, ['men', 'shoes', 'super'],"test"),        
    ];
    this.kartProducts = [];
  }
  productChanged(product: Product): void {
    this.addToKart(product);
    
      }
      addToKart(product: Product): void {
        this.kartProducts.push(product);
        
       }
}
