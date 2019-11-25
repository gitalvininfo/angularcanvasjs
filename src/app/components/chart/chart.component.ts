import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from '';
import * as CanvasJS from './canvasjs.min';
import { getRtlScrollAxisType } from '@angular/cdk/platform';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let dataPoints = [];
    let chartdata = [];
    let dataPoints = [
      {
        "college": "CIT",
        "count": 250
      },
      {
        "college": "CBA",
        "count": -350
      },
      {
        "college": "CCJE",
        "count": -150
      },
      {
        "college": "OED",
        "count": -250
      },
      {
        "college": "CAS",
        "count": 340
      },
      {
        "college": "CAS",
        "count": 340
      },
      {
        "college": "CAS",
        "count": 340
      },
      {
        "college": "CAS",
        "count": 340
      },
      {
        "college": "CAS",
        "count": 340
      },
      {
        "college": "CAS",
        "count": 340
      },
      {
        "college": "CAS",
        "count": 340
      },
      {
        "college": "CAS",
        "count": 340
      }
    ]
    console.log('Datapoints', dataPoints);
    for (var i = 0; i < dataPoints.length; i++) {
      chartdata.push({
        label: dataPoints[i].college,
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
        markerType: "none",
        name: "Total",
        type: "line",
        lineColor: "#00695c",
        dataPoints: chartdata, markerColor: "#ddd"
      }]
    });

    setColor(chart);
    chart.render();
    function setColor(chart) {
      for (var i = 0; i < chart.options.data.length; i++) {
        const dataSeries = chart.options.data[i];
        for (var j = 0; j < dataSeries.dataPoints.length; j++) {
          if (dataSeries.dataPoints[j].y <= 0)
            dataSeries.dataPoints[j].lineColor = '#ff443d';
        }
      }
    }

  }

}
