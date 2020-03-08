import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panelOpenState: boolean = false;
  isDisabled: boolean;


  constructor(private formBuilder: FormBuilder) { }

  detectURL(event) {
    this.isDisabled = event;
    console.log(event);
  }

  ngOnInit() {

  }

    togglePanel(event) {
    this.panelOpenState = event;
    console.log('paneopenstate', this.panelOpenState)
  }

}
