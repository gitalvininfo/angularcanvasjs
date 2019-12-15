import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild("email", { static: false }) private _inputElement: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._inputElement.nativeElement.focus();
  }

}
