import { Component, OnInit, Input, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})



export class CommentsContainerComponent implements OnInit {
  @Input() xpandStatus: boolean;
  @Output() xpandEvent = new EventEmitter();

  panelOpenState: boolean;
  isFocusInsideComponent = false;
  isComponentClicked = false;

  @HostListener('click')
  clickInside() {
    this.isFocusInsideComponent = true;
    // this.isComponentClicked = true;
    console.log('sulod');
  }

  @HostListener('document:click')
  clickout() {
    if (!this.isFocusInsideComponent && this.isComponentClicked) {
      // do the heavy process

      this.isComponentClicked = false;
      console.log('gwa');
      this.xpandStatus = false;

    }
    this.isFocusInsideComponent = false;
  }


  constructor(private elementRef: ElementRef) {
  }


  ngOnInit() {
  }

  // ngOnChanges() {
  //   setTimeout(() => {
  //     console.log('Current State', this.xpandStatus);
  //   });
  // }



}
