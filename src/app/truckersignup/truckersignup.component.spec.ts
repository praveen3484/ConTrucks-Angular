import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckersignupComponent } from './truckersignup.component';

describe('TruckersignupComponent', () => {
  let component: TruckersignupComponent;
  let fixture: ComponentFixture<TruckersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
