import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConpersonalprofileComponent } from './conpersonalprofile.component';

describe('ConpersonalprofileComponent', () => {
  let component: ConpersonalprofileComponent;
  let fixture: ComponentFixture<ConpersonalprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConpersonalprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConpersonalprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
