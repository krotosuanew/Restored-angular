import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CityDto} from "../../../dto/city.dto";
import {CityService} from "../../../../services/citySevice/city.service";
import {MasterService} from "../../../../services/masterService/master.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MasterListDto, MasterReqDto, MasterReqUpdateDto} from "../../../dto/master.dto";
import Validation from "../../../helpers/validation";

@Component({
  selector: 'app-modal-masters',
  templateUrl: './modal-masters.component.html',
  styleUrls: ['./modal-masters.component.scss']
})
export class ModalMastersComponent implements OnInit {
  cityList: CityDto[] | null
  hide = true;
  hideRepeatPass = true;
  public masterForm!: FormGroup;

  constructor(private masterService: MasterService,
              public dialogRef: MatDialogRef<ModalMastersComponent>,
              private cityService: CityService,
              @Inject(MAT_DIALOG_DATA) public data: MasterListDto,
  ) {
    this.cityService.cities.subscribe((event) => this.cityList = event)
  }

  addMaster(): void {

    const masterInfo: MasterReqDto = {
      name: this.masterForm.get('name')!.value,
      email: this.masterForm.get('email')!.value,
      isActivated: true,
      rating: this.masterForm.get('rating')!.value,
      cityId: this.masterForm.get('cityIds')!.value,
      isMaster: true,
      password: this.masterForm.get('password')!.value
    }
    this.masterService.addMaster(masterInfo)
    this.onNoClick()
  }

  ngOnInit(): void {
    this.cityService.getCities()
    this.masterForm = new FormGroup({
      name: new FormControl(this.data ? this.data.name : '',
        [Validators.required]),
      email: new FormControl(this.data ? this.data.email : '',
        [Validators.required, Validators.email]),
      password: new FormControl('',
        [Validators.required, Validators.minLength(6)]),
      repeatPassword: new FormControl('',
        [Validators.required, Validators.minLength(6)]),
      rating: new FormControl(this.data ? this.data.rating : 0,
        [Validators.required, Validators.min(0), Validators.max(5)]),
      cityIds: new FormControl(this.data ? this.data.cities.map(city => city.id) : [], [Validators.required]),
    },{validators:[Validation.match('password','repeatPassword')]});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeMaster() {
    const masterInfo: MasterReqUpdateDto = {
      id: this.data.id,
      name: this.masterForm.get('name')!.value,
      rating: this.masterForm.get('rating')!.value,
      cityId: this.masterForm.get('cityIds')!.value,

    }
    this.masterService.updateMaster(masterInfo)
    this.onNoClick()
  }
}
