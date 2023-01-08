import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "../services/authService/auth.service";
import {UserDto} from "./dto/user.dto";
import jwt_decode from "jwt-decode";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  user: UserDto | null

  constructor(private router: Router,
              private authService: AuthService
  ) {
    this.authService.user.subscribe((event) => this.user = event)
  }

  ngOnInit() {
    this.authService.check().subscribe((res) => {
        this.user = jwt_decode(res.token)
        localStorage.setItem('token', res.token)
      }
    )

  }

}
