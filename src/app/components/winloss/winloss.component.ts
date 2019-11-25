import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-winloss',
  templateUrl: './winloss.component.html',
  styleUrls: ['./winloss.component.css']
})
export class WinlossComponent implements OnInit {

  constructor() { }

  winDisplay: number;
  lossDisplay: number;

  ngOnInit() {

    let winPercent = 70 / 100;
    this.winDisplay = winPercent * 100;

    let lossPercent = 30 / 100;
    this.lossDisplay = lossPercent * 100;

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      // animationEnabled: true,
      // exportEnabled: true,
      title: {
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y} (#percent%)",
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
