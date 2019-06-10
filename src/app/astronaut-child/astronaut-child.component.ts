import { Component, Input } from '@angular/core';
import { MissionService } from '../mission.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-astronaut-child',
  template: `
    <p>
    {{astronaut}}: <strong>{{mission}}</strong>
    <button (click)="confirm()" [disabled]="!announced || confirmed">Confirm</button>
    </p>
  `,
  styles: []
})
export class AstronautChildComponent  {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;
  
  constructor(private missionService: MissionService){
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  confirm(){
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
}
