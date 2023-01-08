import {Component, OnInit} from '@angular/core';
import {CityService} from "../../../services/citySevice/city.service";
import {ModalCityComponent} from "./modal-city/modal-city.component";
import {MatDialog} from "@angular/material/dialog";
import {CityDto} from "../../dto/city.dto";

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {

  cityList: CityDto[]|null
  constructor(private cityService: CityService,
              public dialog: MatDialog) {
     this.cityService.cities.subscribe((event)=>this.cityList = event)
  }

  ngOnInit(): void {

    this.cityService.getCities()
  }

  openDialog(cityData?:CityDto): void {
    const dialogRef = this.dialog.open(ModalCityComponent, {
      width: window.innerWidth < 1000 ? "80%" : '50%',
      data:cityData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cityService.getCities()
    });
  }

  delete(id: number): void {
    this.cityService.delete(id)
    this.cityService.getCities()
  }
}
