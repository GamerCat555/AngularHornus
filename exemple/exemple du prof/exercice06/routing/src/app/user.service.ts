
import { IUser } from './types/IUser.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  login(user: IUser): boolean{
    if (user.login === 'gilles' && user.password ==='test'){
      localStorage.setItem('username',user.login);
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('username');
  }
  getUser():any{
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }


}
export const AUTH_PROVIDERS: Array<any> = [
  {provide : UserService, useClass: UserService}
];