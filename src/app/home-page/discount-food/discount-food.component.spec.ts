import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountFoodComponent } from './discount-food.component';

describe('DiscountFoodComponent', () => {
  let component: DiscountFoodComponent;
  let fixture: ComponentFixture<DiscountFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
