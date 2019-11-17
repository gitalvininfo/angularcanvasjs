import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-comment-button',
  templateUrl: './comment-button.component.html',
  styleUrls: ['./comment-button.component.css']
})
export class CommentButtonComponent implements OnInit {
  xpandStatus: boolean;
  @Output() xpandEvent = new EventEmitter();
  constructor() { }

  public wasInside = false;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
    console.log('Was Inside ', this.wasInside);
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.xpandStatus = false;
      console.log('Was Inside ', this.wasInside);
    }
    this.wasInside = false;
    this.xpandEvent.emit(this.xpandStatus);
  }


  ngOnInit() {
    this.xpandStatus = false;
  }



  click() {
    this.xpandStatus = !this.xpandStatus;
    this.xpandEvent.emit(this.xpandStatus);
    console.log('clicked');
  }

}
