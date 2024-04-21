import { Component } from '@angular/core';
import { setInterval } from 'timers/promises';
import { AppComponent } from '../app.component';
import { clearInterval } from 'timers';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  title = "HommeOffice - Timer";

  //currentTime: number = 0
  animationFrame: number | undefined;
  lastFrameTime = 0;
  ms: any = '0' + 0;
  sec: any = '0' + 0;
  min: any = '0' + 0;
  hr: any = '0' + 0;

  //Start timer
  startTimer() {
    const updateTimer = (currentTime: number) => {
      if (!this.lastFrameTime) {
        this.lastFrameTime = currentTime;
      }
      const deltaTime = currentTime - this.lastFrameTime;

      if (deltaTime >= 1000) {
        this.lastFrameTime = currentTime;
        this.ms += deltaTime;
        this.ms = this.ms < 10 ? "0" + this.ms : this.ms;

        if (this.ms >= 100) {
          this.sec++;
          this.sec = this.sec < 10 ? "0" + this.sec : this.sec;
          this.ms = "0" + 0;
        }
        if (this.sec >= 60) {
          this.min++;
          this.min = this.min < 10 ? "0" + this.min : this.min;
          this.sec = "0" + 0;
        }
        if (this.min >= 60) {
          this.hr++;
          this.hr = this.hr < 10 ? "0" + this.hr : this.hr;
          this.min = "0" + 0;
        }
      }
      this.animationFrame = requestAnimationFrame(updateTimer);
    };

    if (!this.animationFrame) {
      this.animationFrame = requestAnimationFrame(updateTimer);
    }
  }

  //Stop Timer and save data in databse
  stopTimer() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = undefined;
      this.lastFrameTime = 0;

      alert(`Arbeitszeit:\nStunden: ${this.hr}\nMinuten: ${this.min}\nSekunden: ${this.sec}`);
      
      this.resetTimer()

      //TODO Send data to database

    }
  }

  //Reset Timer
  resetTimer() {
    this.animationFrame = undefined;
      this.lastFrameTime = 0;
      this.ms = '0' + 0;
      this.sec= '0' + 0;
      this.min= '0' + 0;
      this.hr = '0' + 0;
  }

}
