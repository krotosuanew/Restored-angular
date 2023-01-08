import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../services/userService/user.service";
import {UserListDto,} from "../../dto/user.dto";
import {ModalUsersComponent} from "./modal-users/modal-users.component";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: UserListDto[] | null

  constructor(private userService: UserService,
              public dialog: MatDialog) {
    this.userService.users.subscribe(event => this.usersList = event)
  }

  ngOnInit(): void {
    this.userService.getUsers()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalUsersComponent, {
      width: window.innerWidth < 1000 ? "80%" : '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userService.getUsers()
    });
  }

  delete(id: number): void {
    this.userService.delete(id)
  }

  changeUserStatus(id: number, isActivated: boolean): void {
    this.userService.changeStatus(id, isActivated)
  }
}
