import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsTwoComponent } from './testimonials-two.component';

describe('TestimonialsTwoComponent', () => {
  let component: TestimonialsTwoComponent;
  let fixture: ComponentFixture<TestimonialsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
