import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClockService} from "../../../../services/clockService/clock.servise";
import {CityDto, CityReqDto} from "../../../dto/city.dto";
import {ClocksDto, ClocksReqDto} from "../../../dto/clocks.dto";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-clocks',
  templateUrl: './modal-clocks.component.html',
  styleUrls: ['./modal-clocks.component.scss']
})
export class ModalClocksComponent implements OnInit {
  public clockForm!: FormGroup;
  textHeader = this.data ? 'Edit clock' : 'Add clock'
  textButton = this.data ? 'Edit' : 'Add'
  constructor(private clockService: ClockService,
              public dialogRef: MatDialogRef<ModalClocksComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ClocksDto,
  ) { }
  ngOnInit() {
    this.clockForm = new FormGroup({
      name: new FormControl(this.data ? this.data.name : '',
        [Validators.required]),
      date: new FormControl(this.data ? this.data.date : '',
        [ Validators.required]),
    });

  }
  addClock():void{
    if(!this.clockForm.valid){
      return
    }
    const clockInfo:ClocksReqDto = {
      name:this.clockForm.get('name')!.value,
      date:this.clockForm.get('date')!.value,
    }
    this.clockService.addClocks(clockInfo)
    this.onNoClick()
  }
  changeClock():void{
    if(!this.clockForm.valid){
      return
    }
    const clockInfo:ClocksReqDto = {
      id:this.data.id,
      name:this.clockForm.get('name')!.value,
      date:this.clockForm.get('date')!.value,
    }
    this.clockService.updateClock(clockInfo)
    this.onNoClick()
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
