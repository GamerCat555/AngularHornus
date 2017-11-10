import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductDepartementComponent } from './product-departement/product-departement.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { PriceImageComponent } from './price-image/price-image.component';
import { ProductNewImageComponent } from './product-new-image/product-new-image.component';
import { CartPriceComponent } from './cart-price/cart-price.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductDepartementComponent,
    PriceDisplayComponent,
    PriceImageComponent,
    ProductNewImageComponent,
    CartPriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
