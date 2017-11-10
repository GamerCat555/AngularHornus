import { ShopComponent } from './page/shop/shop.component';
import { CharacterComponent } from './page/character/character.component';
import { HomeComponent } from './page/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'character', component : CharacterComponent},
  {path: 'shop', component : ShopComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
