import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCityComponent } from './modal-city.component';

describe('ModalCityComponent', () => {
  let component: ModalCityComponent;
  let fixture: ComponentFixture<ModalCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
