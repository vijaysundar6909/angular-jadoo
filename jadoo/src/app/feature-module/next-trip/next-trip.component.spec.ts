import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextTripComponent } from './next-trip.component';

describe('NextTripComponent', () => {
  let component: NextTripComponent;
  let fixture: ComponentFixture<NextTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
