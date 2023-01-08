import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CityService} from "../../../../services/citySevice/city.service";
import {CityDto, CityReqDto} from "../../../dto/city.dto";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-city',
  templateUrl: './modal-city.component.html',
  styleUrls: ['./modal-city.component.scss']
})
export class ModalCityComponent implements OnInit {
  textHeader = this.data ? 'Edit city' : 'Add city'
  textButton = this.data ? 'Edit' : 'Add'
  public cityForm!: FormGroup;

  constructor(private cityService: CityService,
              public dialogRef: MatDialogRef<ModalCityComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CityDto,
  ) {
  }

  ngOnInit() {
    this.cityForm = new FormGroup({
      name: new FormControl(this.data ? this.data.name : '',
        [Validators.required]),
      price: new FormControl(this.data ? this.data.price : '',
        [ Validators.required]),
    });

  }

  addCity(): void {
    if(!this.cityForm.valid){
      return
    }
    const cityInfo:CityReqDto = {
      name:this.cityForm.get('name')!.value,
      price:this.cityForm.get('price')!.value,
    }
   this.cityService.addCity(cityInfo)
    this.onNoClick()
  }
  changeCity():void{
    if(!this.cityForm.valid){
      return
    }
    const cityInfo:CityReqDto = {
      id:this.data.id,
      name:this.cityForm.get('name')!.value,
      price:this.cityForm.get('price')!.value,
    }
    this.cityService.updateCity(cityInfo)
    this.onNoClick()
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
