import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public i = 0;
  public Elogio = ["Gostosa","Linda","Tesao"];
  public suaLinda = "Amor";

  public incrementCounter() {
    this.currentCount++;
  }

  public falaLogo() {
    if (this.i < this.Elogio.length) {
      this.suaLinda += " " + this.Elogio[this.i];
      this.i++;
    }
    else {
      this.suaLinda = "Acabaram os elogios";
    }
  }
}
