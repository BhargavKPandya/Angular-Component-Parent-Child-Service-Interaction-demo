import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-child',
  template: `
      <h3>{{heroChild.name}}</h3>
      <p>I, {{heroChild.name}}, at your service, {{masterName}} </p>
  `,
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {
  @Input() heroChild: Hero;
  @Input('master') masterName: String;

  constructor() { }

  ngOnInit() {
  }

}
