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

  temp: any;
  tempo: any;

  ngOnInit() {
    let chartdata = [];
    let dataPoints = [
      // {
      //   "college": 1574085727,
      //   "count": -205000
      // },
      // {
      //   "college": 1574085727,
      //   "count": -250000
      // },
      {
        "college": 1573308127,
        "count": 330000
      },
      {
        "college": 1573308127,
        "count": 840000
      },
      // {
      //   "college": 1573308127,
      //   "count": -1040000
      // },
      // {
      //   "college": 1573308127,
      //   "count": -1070000
      // }
    ]


    var suffixes = ["", "K", "M", "B"];

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
        // logarithmic: true,
        labelFormatter: addSymbols,
        // includeZero: false,
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

    this.setColor(chart);
    chart.render();
    this.setMarker(chart);
    function addSymbols(x, y) {
      var suffixes = ["", "K", "M", "B"];
      var order = Math.max(Math.floor(Math.log(x.value) / Math.log(1000)), 0);
      var orders = Math.max(Math.floor(Math.log(Math.abs(x.value)) / Math.log(1000)), 0);
      if (order > suffixes.length - 1)
        order = suffixes.length - 1;

      if (orders > suffixes.length - 1)
        orders = suffixes.length - 1;
      // console.log('Order', orders)

      if (order > 0) {
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(x.value / Math.pow(1000, order)) + suffix;
      }
      else {
        var suffix = suffixes[orders];
        return CanvasJS.formatNumber(-Math.abs(x.value) / Math.pow(1000, orders)) + suffix;
      }
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

  setMarker(chart) {
    var maxY = -Infinity;
    var minY = Infinity;
    var maxYIndex, minYIndex;
    var viewportMinimum = chart.axisX[0].get("viewportMinimum");
    var viewportMaximum = chart.axisX[0].get("viewportMaximum");
    for (var i = 0; i < chart.data[0].dataPoints.length; i++) {
      chart.options.data[0].dataPoints[i].markerType = "circle";
      chart.options.data[0].dataPoints[i].indexLabel = " ";
      if (chart.data[0].dataPoints[i].x >= viewportMinimum && chart.data[0].dataPoints[i].x <= viewportMaximum && chart.data[0].dataPoints[i].y >= maxY) {
        maxY = chart.data[0].dataPoints[i].y;
        maxYIndex = i;
      }
      if (chart.data[0].dataPoints[i].x >= viewportMinimum && chart.data[0].dataPoints[i].x <= viewportMaximum && chart.data[0].dataPoints[i].y <= minY) {
        minY = chart.data[0].dataPoints[i].y;
        minYIndex = i;
      }
    }

    var tradesLength = chart.options.data[0].dataPoints.length;
    var highestTrades = chart.data[0].dataPoints[maxYIndex].y;
    var lowestTrades = chart.data[0].dataPoints[minYIndex].y;




    var showDefaultMarker = chart.options.data[0].dataPoints[minYIndex].markerSize = chart.options.data[0].dataPoints[maxYIndex].markerSize = 8;

    var highMarkerType = chart.options.data[0].dataPoints[maxYIndex].markerType = "triangle";
    var highMarkerColor = chart.options.data[0].dataPoints[maxYIndex].markerColor = "green";
    var highIndexLabel = chart.options.data[0].dataPoints[maxYIndex].indexLabel = "Highest";

    var lowMarkerType = chart.options.data[0].dataPoints[minYIndex].markerType = "cross";
    var lowMarkerColor = chart.options.data[0].dataPoints[minYIndex].markerColor = "red";
    var lowIndexLabel = chart.options.data[0].dataPoints[minYIndex].indexLabel = "Lowest";

    // if there are many trades already
    if (tradesLength > 1) {
      showDefaultMarker;
      highMarkerType;
      highMarkerColor;
      highIndexLabel;

      lowMarkerType;
      lowMarkerColor;
      lowIndexLabel;

    }

    // if the trade count is only 1 and its value is positive
    else if (tradesLength < 2 && highestTrades > 1) {
      showDefaultMarker;
      var highMarkerType = chart.options.data[0].dataPoints[maxYIndex].markerType = "triangle";
      var highMarkerColor = chart.options.data[0].dataPoints[maxYIndex].markerColor = "green";
      var highIndexLabel = chart.options.data[0].dataPoints[maxYIndex].indexLabel = "Highest";
    }

    // if trade count is only 1 and its value is negative;
    else if (tradesLength < 2 && highestTrades < 1) {
      showDefaultMarker;
      lowMarkerType;
      lowMarkerColor;
      lowIndexLabel;
    }


    /*   chart.options.axisY.stripLines[0].value = minY;
      chart.options.axisY.stripLines[0].label = minY;
      
      chart.options.axisY.stripLines[1].value = maxY;
      chart.options.axisY.stripLines[1].label = maxY; */

    chart.render();
  }
}
