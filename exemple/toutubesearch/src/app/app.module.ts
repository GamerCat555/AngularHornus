import { toutTubeSearchInjectables } from './injectables/tout-tube-search.injectables';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './tout-tube-search/search-box/search-box.component';
import { SearchResultComponent } from './tout-tube-search/search-result/search-result.component';
import { ToutTubeSearchComponent } from './tout-tube-search/tout-tube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent,
    ToutTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [toutTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
