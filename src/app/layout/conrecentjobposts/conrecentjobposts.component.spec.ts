import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConrecentjobpostsComponent } from './conrecentjobposts.component';

describe('ConrecentjobpostsComponent', () => {
  let component: ConrecentjobpostsComponent;
  let fixture: ComponentFixture<ConrecentjobpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConrecentjobpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConrecentjobpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
