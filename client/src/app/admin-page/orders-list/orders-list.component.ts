import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalCityComponent} from "../cities-list/modal-city/modal-city.component";
import {OrderService} from "../../../services/orderService/order.service";
import {OrderDto} from "../../dto/order.dto";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  ordersList:OrderDto[]
  constructor(private orderService: OrderService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(res=>{
      this.ordersList = res.rows
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalCityComponent,{
      width:"40%"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.orderService.getOrders().subscribe(res=>{
        this.ordersList = res.rows
      })
    });
  }
  delete(id: number): void {
    this.orderService.delete(id)
    this.orderService.getOrders().subscribe(res => {
      this.ordersList = res.rows
    })
  }
}
