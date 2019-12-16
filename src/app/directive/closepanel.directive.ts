import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appClosepanel]'
})
export class ClosepanelDirective {
  @Input() xpandStatus: boolean;
  @Output() xpandEvent = new EventEmitter();
  constructor() { }
  private wasInside = false;
  @HostListener('document:click')
  clickout() {
    this.wasInside = false;
    console.log('Was Outside', this.wasInside)
    if (!this.wasInside) {
      this.xpandStatus = false;
    }
    this.xpandStatus = !this.xpandStatus;
    this.xpandEvent.emit(this.xpandStatus);
  }


  // @HostListener('document:click')
  // clickout() {
  //   this.wasInside = false;
  //   console.log('Was Outside', this.wasInside)
  //   // if (!this.wasInside) {
  //   //   this.xpandStatus = false;
  //   // }
  //   // // this.xpandStatus = !this.xpandStatus;
  //   // // this.xpandEvent.emit(this.xpandStatus);
  // }

}
