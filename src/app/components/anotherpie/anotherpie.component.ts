import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../chart/canvasjs.min';
@Component({
  selector: 'app-anotherpie',
  templateUrl: './anotherpie.component.html',
  styleUrls: ['./anotherpie.component.css']
})
export class AnotherpieComponent {

  constructor() { }
  winDisplay: number;
  lossDisplay: number;


  ngAfterViewInit() {

    let winPercent = 70 / 100;
    this.winDisplay = winPercent * 100;

    let lossPercent = 30 / 100;
    this.lossDisplay = lossPercent * 100;

    let chart = new CanvasJS.Chart("chartContainer3", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: this.winDisplay, name: "Win", color: "#00695c" },
          { y: this.lossDisplay, name: "Loss", color: "#ff443d" },
        ]
      }]
    });

    chart.render();
  }

}
