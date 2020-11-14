import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfoodComponent } from './dayfood.component';

describe('DayfoodComponent', () => {
  let component: DayfoodComponent;
  let fixture: ComponentFixture<DayfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
