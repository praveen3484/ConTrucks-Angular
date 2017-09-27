import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeecurrentjobsComponent } from './seecurrentjobs.component';

describe('SeecurrentjobsComponent', () => {
  let component: SeecurrentjobsComponent;
  let fixture: ComponentFixture<SeecurrentjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeecurrentjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeecurrentjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
