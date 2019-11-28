import { Component, OnInit, Input, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})



export class CommentsContainerComponent implements OnInit {
  @Input() xpandStatus: boolean;
  @Input() xpandEvent = new EventEmitter();

  
  constructor(private elementRef:ElementRef) { }

   public wasInside = false;

  // @HostListener('click')
  // clickInside() {
  //   this.wasInside = true;
  // }

  // @HostListener('document:click')
  // clickout() {
  //   if (!this.wasInside) {
  //     this.xpandStatus = false;
  //   }
  //   this.wasInside = false;
  //   this.xpandEvent.emit(this.xpandStatus);
  // }

 

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('container_comment')
                                  .addEventListener('click', this.onClick.bind('click', this.onClick.bind(this)));
  }

  onClick(event) {
    console.log(event);
  }

}
