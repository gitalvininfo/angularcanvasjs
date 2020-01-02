import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appBlockurl]'
})
export class BlockurlDirective {

  constructor(private el: ElementRef) { }
  @Output() detectURL = new EventEmitter();
  isDisabled: boolean;
  expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  regex = new RegExp(this.expression);

  @HostListener('keyup') check() {
    if (this.el.nativeElement.value.match(this.regex)) {
      this.detectURL.emit(true);

    } else {
      this.detectURL.emit(false);
    }
  }

}
