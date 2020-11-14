import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurChefsComponent } from './our-chefs.component';

describe('OurChefsComponent', () => {
  let component: OurChefsComponent;
  let fixture: ComponentFixture<OurChefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurChefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
