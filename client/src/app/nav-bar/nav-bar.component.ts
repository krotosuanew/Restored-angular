import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/authService/auth.service";
import {UserDto} from "../dto/user.dto";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() user: UserDto | null

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout()
    this.user =null
  }
}
