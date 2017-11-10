import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CharacterComponent } from './pages/character/character.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BattleComponent } from './pages/home/battle/battle.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'character', component : CharacterComponent},
  {path: 'shop', component : ShopComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ShopComponent,
    HomeComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
