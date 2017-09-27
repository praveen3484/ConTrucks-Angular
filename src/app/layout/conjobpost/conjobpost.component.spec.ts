import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjobpostComponent } from './conjobpost.component';

describe('ConjobpostComponent', () => {
  let component: ConjobpostComponent;
  let fixture: ComponentFixture<ConjobpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjobpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
