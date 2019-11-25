import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _snackBar: MatSnackBar) { }
  title = 'testapp';
  dataPoints = [
    {
      "date": 1511435475,
      "count": 250
    },
    {
      "date": 1511435492,
      "count": -350
    }
  ]

  result = this.dataPoints.map(function(a) {return a.date;});

  myHero = this.result[0];

ngOnInit(): void {
  
  
}

}
