import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from '../chart/canvasjs.min';

export interface WinLoss {
  loss: number;
  win: number;
}
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  @Input() data: WinLoss;
  constructor() { }

  winDisplay: number;
  lossDisplay: number;
  trades_data: any;


  ngAfterViewInit() {

    let winPercent = 70 / 100;
    this.winDisplay = winPercent * 100;

    let lossPercent = 30 / 100;
    this.lossDisplay = lossPercent * 100;

    let chart = new CanvasJS.Chart("chartContainer2", {
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
