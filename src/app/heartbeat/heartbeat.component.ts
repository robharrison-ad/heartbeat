import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-heartbeat',
  templateUrl: './heartbeat.component.html',
  styleUrls: ['./heartbeat.component.scss']
})
export class HeartbeatComponent implements OnInit, OnDestroy {

  @Input('alive') alive: boolean = true;
  @Input('flowRate') pointDelay = 50;
  @Input('pulseRate') ecgDelay = 0;
  ecgPoints = [5, 6, 5, 6, 3, 30, -10, 0, 2, 3, 14, 6, 5, 5, 5, 5, 5];
  ecg = {
    data: this.ecgPoints,
    label: 'Are you alive or are you dead?'
  }
  baseecg = [5, 6, 5, 6, 3, 30, -10, 0, 2, 3, 14, 6, 5, 5, 5, 5, 5];
  ecgLabels = ' '.repeat(this.baseecg.length * 3 + 1).split('');

  ecgOptions: any = {
    responsive: true,
    resizeDelay: 0,
    animations: {
      tension: {
        duration: 1000,
        easing: 'ease-out',
        from: 10,
        to: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          min: -10,
          max: 30
        }
      }]
    },
    annotation: {
      annotations: [{
        type: 'box',
        yScaleID: 'y-axis-0',
        yMin: 15,
        yMax: 25,
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 2,
        backgroundColor: 'yellow'
      }]
    }
  }

  ecgColors = [
    {
      backgroundColor: 'transparent',
      borderColor: this.alive ? 'rgba(255,0,0,1)' : 'rgba(255, 255, 255, 1)',
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'gray',
    }
  ]

  ecgCount = 0;
  ecgTimers = [];


  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
    // this.ecgTimers.push(setTimeout(() => { this.addecg(this) }, 1000));
  }

  ngOnDestroy(): void {
    this.ecgTimers.forEach(val => {
      clearTimeout(val);
    });
  }

  addecg(component: HeartbeatComponent) {
    component.baseecg.forEach((val, idx) => {
      const t = setTimeout(() => {
        component.addPoint(component, (component.alive ? val : 0));
      }, (idx * component.pointDelay));
      this.ecgTimers.push(t);
    });

    const t2 = setTimeout(() => {
      component.addecg(component);
      component.ecgCount++;
    }, (component.baseecg.length * component.pointDelay + component.ecgDelay))
    this.ecgTimers.push(t2);

  }

  addPoint(component, val) {
    component.ecgPoints.push(this.alive ? val : 0);
    this.setColor();
    if (component.ecgPoints.length > (3 * component.baseecg.length)) {
      const t = setTimeout(() => {
        component.ecgPoints.splice(0, component.ecgPoints.length - component.ecgLabels.length);
      }, component.pointDelay);
      this.ecgTimers.push(t);
    }
  }

  setColor() {
    this.ecgColors['borderColor'] = this.alive ? 'rgba(255,0,0,1)' : 'rgba(255, 255, 255, 1)';
    // console.log(this.alive, this.ecgColors);
  }


  animationProgress(animation) {
    console.log(`animation step #${animation.currentStep} of ${animation.numSteps}`);
  }

  animationComplete(animation) {
    console.log('animation complete.');
  }

}
