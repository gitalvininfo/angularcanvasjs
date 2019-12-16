import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlockurl]'
})
export class BlockurlDirective {

  constructor(private el: ElementRef) { }

  expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  regex = new RegExp(this.expression);

  @HostListener('keyup') check() {
    if (this.el.nativeElement.value.match(this.regex)) {
      alert('You have entered a URL!');
      // Remove entered content
      this.el.nativeElement.value = '';
    } else {
      console.log('Does not match');
    }
  }

}
