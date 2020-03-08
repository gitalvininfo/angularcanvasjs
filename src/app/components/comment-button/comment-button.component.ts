import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { CommentsContainerComponent } from '../comments-container/comments-container.component'



@Component({
  selector: 'app-comment-button',
  templateUrl: './comment-button.component.html',
  styleUrls: ['./comment-button.component.css']
})
export class CommentButtonComponent implements OnInit {
  xpandStatus: boolean;
  @Output() xpandEvent = new EventEmitter();
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.xpandStatus = false;
  }

  click() {
    this.xpandStatus = !this.xpandStatus;
    this.xpandEvent.emit(this.xpandStatus);

    console.log('clicked');
  }

}
