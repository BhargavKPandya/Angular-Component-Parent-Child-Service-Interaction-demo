import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTakerParentComponent } from './vote-taker-parent.component';

describe('VoteTakerParentComponent', () => {
  let component: VoteTakerParentComponent;
  let fixture: ComponentFixture<VoteTakerParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteTakerParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteTakerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
