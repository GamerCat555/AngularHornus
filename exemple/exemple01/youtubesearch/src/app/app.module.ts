import { toutTubeSearchInjectables } from './you-tube-search/injectable/toput-tube-search.injectable';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import {HttpModule} from '@angular/Http';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './you-tube-search/search-box/search-box.component';
import { SearchResultComponent } from './you-tube-search/search-result/search-result.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YouTubeSearchComponent
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
