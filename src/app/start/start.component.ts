import { Component } from '@angular/core';
import { setInterval } from 'timers/promises';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

  

  title = "HommeOffice - Timer"

  running: boolean = false
  start: any

  sec: any = "0" + 0
  min: any = "0" + 0
  hr: any = "0" + 0


  startTimer() {
    if (this.running != true) {
      this.running = true

      
    }
  }
}
