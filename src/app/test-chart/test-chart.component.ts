import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.scss']
})
export class TestChartComponent implements OnInit {

  alive = true;
  constructor() { }

  ngOnInit(): void {
    // setInterval(() => { this.generateDeadOrAlive(); }, 2000);

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
