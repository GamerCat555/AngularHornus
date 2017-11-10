import { IUser } from './../types/IUser.interfaces';
import { UserService } from './../user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { passwordValidator } from '../validator/passwordValidator.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean;
  login: AbstractControl;
  password: AbstractControl;
  myForm: FormGroup;
  constructor(private userService: UserService, formBuilder: FormBuilder) {
    this.isLoggedIn = userService.isLoggedIn;
    this.myForm = formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', Validators.compose([Validators.required, passwordValidator])]
    });
    this.login = this.myForm.controls['login'];
    this.password = this.myForm.controls['password'];
  }
  ngOnInit() {
  }

  onSubmit(value: IUser) {
    if (this.myForm.valid) {
      this.userService.login(value);
      // this.myForm.reset();
    }
  }
  logout():boolean
  {
    this.userService.logout();
    this.isLoggedIn=this.userService.isLoggedIn();
    return false;
  }
}
