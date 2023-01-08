import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/userService/user.service";
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../services/authService/auth.service";
import {RegisterUserDto} from "../dto/user.dto";
import {CityDto} from "../dto/city.dto";
import {CityService} from "../../services/citySevice/city.service";
import Validation from "../helpers/validation";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  cityList: CityDto[] | null
  public registerForm!: FormGroup;
  hide = true;
  hideRepeatPass = true;
  constructor(private authService: AuthService,
              private cityService: CityService,
  ) { this.cityService.cities.subscribe((event) => this.cityList = event)
  }

  addUsers(): void {
    if(!this.registerForm.valid){
      return
    }

    const userInfo={
      name:this.registerForm.get('name')!.value,
      email:this.registerForm.get('email')!.value,
      password:this.registerForm.get('password')!.value,
    }

  }
  onSubmit():void{
    if(!this.registerForm.valid){
      return
    }
    const userInfo:RegisterUserDto={
      name:this.registerForm.get('name')!.value,
      email:this.registerForm.get('email')!.value,
      password:this.registerForm.get('password')!.value,
      isMaster:this.registerForm.get('isMaster')!.value,
    }
    this.authService.registration(userInfo)
  }
  ngOnInit(): void {
    this.cityService.getCities()
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.minLength(6),Validators.required]),
      repeatPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
      name:new FormControl('',Validators.required),
      agree:new FormControl(false,Validators.requiredTrue),
      isMaster:new FormControl(false),
      cityIds: new FormControl([], ),
    },{validators:[Validation.match('password','repeatPassword')]});
  }
}
