import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautChildComponent } from './astronaut-child.component';

describe('AstronautChildComponent', () => {
  let component: AstronautChildComponent;
  let fixture: ComponentFixture<AstronautChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronautChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronautChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
