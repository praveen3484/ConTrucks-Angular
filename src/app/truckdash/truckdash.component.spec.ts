import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckdashComponent } from './truckdash.component';

describe('TruckdashComponent', () => {
  let component: TruckdashComponent;
  let fixture: ComponentFixture<TruckdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
