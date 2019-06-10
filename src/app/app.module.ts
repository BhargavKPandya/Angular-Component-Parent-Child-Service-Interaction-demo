import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VoteTakerParentComponent } from './vote-taker-parent/vote-taker-parent.component';
import { VoterChildComponent } from './voter-child/voter-child.component';
import { CountdownChildComponent } from './countdown-child/countdown-child.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { MissioncontrolParentComponent } from './missioncontrol-parent/missioncontrol-parent.component';
import { AstronautChildComponent } from './astronaut-child/astronaut-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoteTakerParentComponent,
    VoterChildComponent,
    CountdownChildComponent,
    CountdownParentComponent,
    MissioncontrolParentComponent,
    AstronautChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
