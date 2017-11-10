import { AUTH_PROVIDERS } from './user.service';
import { LoggedInGuard } from './logged-in.guard';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', component : AboutComponent},
  {path: 'home', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'protected', component : ProtectedComponent , canActivate: [LoggedInGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AUTH_PROVIDERS, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
