import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClocksComponent } from './modal-clocks.component';

describe('ModalClocksComponent', () => {
  let component: ModalClocksComponent;
  let fixture: ComponentFixture<ModalClocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalClocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalClocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
