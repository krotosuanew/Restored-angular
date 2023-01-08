import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MasterListDto,} from "../../dto/master.dto";
import {MasterService} from "../../../services/masterService/master.service";
import {ModalMastersComponent} from "./modal-masters/modal-masters.component";

@Component({
  selector: 'app-masters-list',
  templateUrl: './masters-list.component.html',
  styleUrls: ['./masters-list.component.scss']
})
export class MastersListComponent implements OnInit {

  mastersList: MasterListDto[] | null

  constructor(private masterService: MasterService,
              public dialog: MatDialog) {
    this.masterService.masters.subscribe((event) => this.mastersList = event)
  }

  ngOnInit(): void {
    this.masterService.getMasters()
  }

  openDialog(masterInfo?: MasterListDto): void {
    const dialogRef = this.dialog.open(ModalMastersComponent, {
      width: window.innerWidth < 1000 ? "80%" : '50%',
      data: masterInfo
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  delete(id: number): void {
    this.masterService.delete(id)
  }
  changeStatus(id:number,isActivated:boolean):void{
    this.masterService.activateMaster(id,isActivated)
  }
}
