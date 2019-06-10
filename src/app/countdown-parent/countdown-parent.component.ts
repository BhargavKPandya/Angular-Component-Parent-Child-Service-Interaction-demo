import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-parent',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button (click)="timer.start()">Start</button>
    <button (click)="timer.stop()">Stop</button>
    <div>{{timer.seconds}}</div>
    <app-countdown-child #timer></app-countdown-child>
  `,
  styles: []
})
export class CountdownParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
