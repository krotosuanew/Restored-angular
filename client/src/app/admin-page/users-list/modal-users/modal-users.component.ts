import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../../services/userService/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Validation from 'src/app/helpers/validation';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss']
})
export class ModalUsersComponent implements OnInit {
  public registerForm!: FormGroup;
  hide = true;
  hideRepeatPass = true;
  constructor(private userService: UserService,
              public dialogRef: MatDialogRef<ModalUsersComponent>,
  ) {
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
    this.userService.addUser(userInfo)
    this.onNoClick()
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.minLength(6),Validators.required]),
      repeatPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
      name:new FormControl('',Validators.required)
    },{validators:[Validation.match('password','repeatPassword')]});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
