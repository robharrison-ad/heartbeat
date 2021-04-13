import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.scss']
})
export class TestChartComponent implements OnInit {
  flowRate = 100;
  pulseRate = 500;

  alive = true;
  constructor() { }

  gaugeType = 'full';
  gaugeAppendText = "MPH";
  gaugeLabel = "Speed";
  gaugeValue = 0;
  gaugeBgColor = '#07037B';
  gaugeFgColor = '#FD0606';
  gaugeMax = 120;
  gaugeMin = -20;
  gaugeCap = 'butt';
  gaugeThick = 30;
  n = this.gaugeMax / 50;

  ngOnInit(): void {
    // setInterval(() => { this.generateDeadOrAlive(); }, 2000);
    this.n = (this.gaugeMax * Math.random()) / 100;
    const i = setInterval(() => {
      if ((this.n > 0 && this.gaugeValue + this.n > this.gaugeMax) || (this.n < 0 && this.gaugeValue + this.n < this.gaugeMin)) {
        this.n = ((this.gaugeMax * Math.random()) / 50) * (this.n < 0 ? -1 : 1);
        this.n = this.n * -1;
      }
      else {
        this.gaugeValue += this.n;
      }
    }, 100);
  }


  killRevive() {
    this.alive = !this.alive;
  }

  generateDeadOrAlive() {
    const rnd = Math.floor(Math.random() * 100);
    console.log(rnd);

    if (this.alive) {
      this.alive = rnd > 80;
    }
    else {
      this.alive = rnd < 25;
    }
    console.log(this.alive);
  }

}
