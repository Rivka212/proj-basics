import { Component } from '@angular/core';
import { Count } from '../../models/countDown.model';

@Component({
  selector: 'count-down',
  standalone: false,

  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.scss'
})
export class CountDownComponent {

  count: Count = {
    startFrom: 10,
    counter: 10,
    isDone: false
  }

  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      if (this.count.counter === 0) {
        clearInterval(this.intervalId)
        this.onDone();
      } else {
        this.count.counter -= 1;
      }
    }, 1000)
  }

  onDone(): void {
    this.count.isDone = true;
    console.log('Done!');
  }

  counterStyle(): string {
    const classList = []
    if (this.count.counter < 6) classList.push('red')
    return classList.join(' ')
  }

}
