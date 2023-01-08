import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ClockService} from "../../../services/clockService/clock.servise";
import {ClocksDto} from "../../dto/clocks.dto";
import {ModalClocksComponent} from "./modal-clocks/modal-clocks.component";

@Component({
  selector: 'app-clocks-list',
  templateUrl: './clocks-list.component.html',
  styleUrls: ['./clocks-list.component.scss']
})
export class ClocksListComponent implements OnInit {

  clocksList:ClocksDto[]|null
  constructor( private clockService: ClockService,
               public dialog: MatDialog) {
    this.clockService.clocks.subscribe((event) => this.clocksList =event)
  }

  ngOnInit(): void {
    this.clockService.getClocks()
  }

  openDialog(clock?:ClocksDto): void {
    const dialogRef = this.dialog.open(ModalClocksComponent,{
      width: window.innerWidth < 1000 ? "80%" : '50%',
      data:clock
    });

    dialogRef.afterClosed().subscribe(result => {
      this.clockService.getClocks()
    });
  }
  delete(id: number): void {
    this.clockService.delete(id)
  }
}
