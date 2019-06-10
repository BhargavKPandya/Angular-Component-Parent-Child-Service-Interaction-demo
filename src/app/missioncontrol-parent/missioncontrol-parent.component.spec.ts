import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissioncontrolParentComponent } from './missioncontrol-parent.component';

describe('MissioncontrolParentComponent', () => {
  let component: MissioncontrolParentComponent;
  let fixture: ComponentFixture<MissioncontrolParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissioncontrolParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissioncontrolParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
