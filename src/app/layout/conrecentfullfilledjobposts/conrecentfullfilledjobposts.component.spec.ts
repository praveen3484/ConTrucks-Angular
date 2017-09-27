import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConrecentfullfilledjobpostsComponent } from './conrecentfullfilledjobposts.component';

describe('ConrecentfullfilledjobpostsComponent', () => {
  let component: ConrecentfullfilledjobpostsComponent;
  let fixture: ComponentFixture<ConrecentfullfilledjobpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConrecentfullfilledjobpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConrecentfullfilledjobpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
