import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulationPageComponent } from './congratulation-page.component';

describe('CongratulationPageComponent', () => {
  let component: CongratulationPageComponent;
  let fixture: ComponentFixture<CongratulationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratulationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongratulationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
