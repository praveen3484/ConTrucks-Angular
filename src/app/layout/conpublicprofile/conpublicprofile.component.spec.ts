import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConpublicprofileComponent } from './conpublicprofile.component';

describe('ConpublicprofileComponent', () => {
  let component: ConpublicprofileComponent;
  let fixture: ComponentFixture<ConpublicprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConpublicprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConpublicprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
