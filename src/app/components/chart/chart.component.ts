import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

// import * as CanvasJS from '';
import * as CanvasJS from './canvasjs.min';
import { getRtlScrollAxisType } from '@angular/cdk/platform';
// import { CustomdatePipe } from '../../customdate.pipe';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [DatePipe]
})
export class ChartComponent implements OnInit {

  constructor(private datePipe: DatePipe) { }


  myTimestamp: any;

  ngOnInit() {
    // let dataPoints = [];



    let chartdata = [];
    let dataPoints = [
      {
        "college": 1574085727,
        "count": 25000
      },
      {
        "college": 1573999327,
        "count": -35000
      },
      {
        "college": 1573826527,
        "count": -15000
      },
      {
        "college": 1573653727,
        "count": -25000
      },
      {
        "college": 1573480927,
        "count": 34000
      },
      {
        "college": 1573394527,
        "count": 34000
      },
      {
        "college": 1573308127,
        "count": 32000
      },
      {
        "college": 1573221727,
        "count": 3100
      },
      {
        "college": 1573135327,
        "count": 3900
      },
      {
        "college": 1572962527,
        "count": 44000
      },
      {
        "college": 1572876127,
        "count": 4400
      },
      {
        "college": 1572616927,
        "count": 45000
      }
    ]

    // const result = dataPoints.map(function (a) { return a.college * 1000 });
    // console.log(result);

    for (var i = 0; i < dataPoints.length; i++) {
      this.myTimestamp = this.datePipe.transform(dataPoints[i].college * 1000, 'MM-dd-yyyy')
      console.log(this.myTimestamp);
      chartdata.push({
        label: this.myTimestamp,
        y: dataPoints[i].count
      });
    }

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: 'light2',
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular 6"
      },
      toolTip: {
        shared: true,
        fontSize: 18,
        borderColor: '#444',
        fontColor: '#444',
        content: "{name}: {y}"

      },
      axisX: {
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisY: {
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
        }
      },

      data: [{
        name: "Total",
        markerSize: 0,
        markerType: "circle",
        markerColor: "#00695c",
        type: "line",
        lineColor: "#00695c",
        dataPoints: chartdata
      }]
    });

    // setColor(chart);
    this.setColor(chart);
    chart.render();

  }
  setColor(chart) {
    for (var i = 0; i < chart.options.data.length; i++) {
      const dataSeries = chart.options.data[i];
      for (var j = 0; j < dataSeries.dataPoints.length; j++) {
        if (dataSeries.dataPoints[j].y <= 0) {
          dataSeries.dataPoints[j].lineColor = '#ff443d';
          dataSeries.dataPoints[j].markerColor = '#ff443d';
        }
      }
    }

  }



}
