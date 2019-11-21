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
        "count": 25000000
      },
      {
        "college": 1573480927,
        "count": 340000
      },
      {
        "college": 1573394527,
        "count": 3400000
      },
      {
        "college": 1573308127,
        "count": 3200000
      },
      {
        "college": 1573221727,
        "count": 3100000
      },
      {
        "college": 1573135327,
        "count": 3900000
      },
      {
        "college": 1572962527,
        "count": 4400000
      },
      {
        "college": 1572876127,
        "count": 4400000
      },
      {
        "college": 1572616927,
        "count": 4500000
      }
    ]

    // const result = dataPoints.map(function (a) { return a.college * 1000 });
    // console.log(result);

    for (var i = 0; i < dataPoints.length; i++) {
      this.myTimestamp = this.datePipe.transform(dataPoints[i].college * 1000, 'MM-dd-yyyy')

      chartdata.push({
        label: this.myTimestamp,
        y: dataPoints[i].count,
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
        logarithmic: true,
        labelFormatter: addSymbols,
        includeZero: false,
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

    function addSymbols(e) {
      var suffixes = ["", "K", "M", "B"];

      var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
      if (order > suffixes.length - 1)
        order = suffixes.length - 1;

      var suffix = suffixes[order];
      return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }

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
