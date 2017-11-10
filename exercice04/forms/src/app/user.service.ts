import { LoginComponent } from './login/login.component';
import { IUser } from './Types/IUser.interface';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
  user: IUser;

  constructor() { 
    this.user = {login:'gilles', password: 'test'};
  }
  signInUser(user: IUser): boolean{
    return (user.login === this.user.login && user.password === this.user.password);
  }
}
