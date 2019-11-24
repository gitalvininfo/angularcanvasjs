import { Component, OnInit, Input, Output, EventEmitter, HostListener, Host } from '@angular/core';
import { CommentsContainerComponent } from '../comments-container/comments-container.component';

@Component({
  selector: 'app-comment-button',
  templateUrl: './comment-button.component.html',
  styleUrls: ['./comment-button.component.css']
})
export class CommentButtonComponent implements OnInit {
  xpandStatus: boolean;
  @Output() xpandEvent = new EventEmitter();
  constructor() { }

  public isDisabled: boolean;
  public wasInside = false;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.xpandStatus = false;
    }
    this.wasInside = false;
    this.xpandEvent.emit(this.xpandStatus);
    console.log(this.wasInside)
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
