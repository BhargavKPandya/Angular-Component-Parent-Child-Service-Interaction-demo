import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  template: `
    <h2>Source Code Version</h2>
    <button (click)="newMinor()">New minor vesrion</button>
    <button (click)="newMajor()">New major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `,
  styles: []
})
export class VersionParentComponent implements OnInit {
  major = 1;
  minor = 12;
  constructor() { }

  ngOnInit() {
  }

  newMinor(){
    this.minor++;
    console.log('Minor version is ' + this.minor);
  }

  newMajor(){
    this.major++;
    this.minor = 0;
    console.log('Major version is ' + this.major);
    console.log('after major version - Minor version is ' + this.minor);
  }

}
