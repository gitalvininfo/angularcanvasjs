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

  trades_data: any

  openSnackBar(message: string, action: string) {
    this._snackBar.open('Fuck', 'Test', {
      duration: 600000,
    });
  }

}
