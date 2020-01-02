import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDisabled: boolean;


  constructor(private formBuilder: FormBuilder) { }

  detectURL(event) {
    this.isDisabled = event;
    console.log(event);
  }

  ngOnInit() {

  }

}
