import { UserService } from './../user.service';
import { IUser } from '../types/IUser.interface';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { passwordValidator } from '../validator/passwordValidator.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class ReactiveFormComponent implements OnInit {
  isLoggedIn: boolean = false;
  login: AbstractControl;
  password : AbstractControl;
  myForm:FormGroup;
  constructor(private userService: UserService, formBuilder: FormBuilder) {
    this.myForm  = formBuilder.group({
      login: ['', [Validators.required, Validators.min(5), Validators.max(12)]],
      password: ['', Validators.compose([Validators.required, passwordValidator])]
    }
   
    );
    
    this.login = this.myForm.controls['login'];
    this.password = this.myForm.controls['password'];
   }

  ngOnInit() {
  } 

  onSubmit(value : IUser){
    if (this.myForm.valid) {
     // console.log(value);
      this.isLoggedIn = this.userService.signInUser(value);
      this.myForm.reset();
    }
  }

}
