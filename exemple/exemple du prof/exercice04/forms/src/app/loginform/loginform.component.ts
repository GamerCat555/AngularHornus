import { Component, OnInit, ViewEncapsulation } from '@angular/core';
export interface IUser {
  login: string;
  password: string;
}
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginformComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  submitForm(form: IUser): boolean {
    console.log(form);
    return false;
  }

}
