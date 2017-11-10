import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { CartPriceComponent } from './cart-price/cart-price.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductPriceComponent,
    ProductDepartmentComponent,
    CartPriceComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
