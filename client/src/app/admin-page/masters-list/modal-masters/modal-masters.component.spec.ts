import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMastersComponent } from './modal-masters.component';

describe('ModalMastersComponent', () => {
  let component: ModalMastersComponent;
  let fixture: ComponentFixture<ModalMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
