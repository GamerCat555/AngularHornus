import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Iuser{
  login: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {

  constructor() { }

  submitForm(form: Iuser):boolean{
    console.log(form);
    return false;
  }

  ngOnInit() {
  }

}
