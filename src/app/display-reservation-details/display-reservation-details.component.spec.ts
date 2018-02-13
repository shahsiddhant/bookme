import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReservationDetailsComponent } from './display-reservation-details.component';

describe('DisplayReservationDetailsComponent', () => {
  let component: DisplayReservationDetailsComponent;
  let fixture: ComponentFixture<DisplayReservationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayReservationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReservationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
