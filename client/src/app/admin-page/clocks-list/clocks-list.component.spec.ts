import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksListComponent } from './clocks-list.component';

describe('ClocksListComponent', () => {
  let component: ClocksListComponent;
  let fixture: ComponentFixture<ClocksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClocksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClocksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
