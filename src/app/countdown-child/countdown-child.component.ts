import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-child',
  template: `
    <p>
      {{message}}
    </p>
  `,
  styles: []
})
export class CountdownChildComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 15;
  
  ngOnDestroy(): void {
    this.clearTimer();
  }

  ngOnInit() {
    this.start();
  }

 clearTimer(){
   clearInterval(this.intervalId);
 }

  start() {
    this.countdown();
    console.log('start clicked');
  }

  stop(){
    this.clearTimer();
    this.message = `You stoped the counter at ${this.seconds} seconds`;
  }

  private countdown(){
    //this.clearTimer();
    this.intervalId = window.setInterval(() =>{
      this.seconds -= 1;
      if(this.seconds === 0){
        this.message = 'Blast off!';
      }
      else{
        if(this.seconds < 0){
          this.seconds = 15;
        }
        this.message = `${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

}
