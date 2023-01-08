import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/authService/auth.service";
import jwt_decode from "jwt-decode";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  hide = true;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.minLength(6),Validators.required]),
    });

  }

  async onSubmit() {
    if(!this.loginForm.valid){
      return
    }

    const userInfo:{email:string,password:string}={
      email:this.loginForm.get('email')!.value,
      password:this.loginForm.get('password')!.value,
    }
    this.authService.login(userInfo)
  }

}
