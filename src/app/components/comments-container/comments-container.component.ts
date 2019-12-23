import { Component, OnInit, Input, HostListener, Output, EventEmitter, ElementRef, ViewChild, AfterContentInit, AfterViewInit, SimpleChanges, OnChanges, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MatInput } from '@angular/material';
@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})



export class CommentsContainerComponent implements OnInit, AfterViewInit {
  @Input() xpandStatus: boolean;
  @Output() xpandEvent = new EventEmitter();

  // @ViewChild('emailInput', { read: ElementRef, static: false }) usrFld: ElementRef;
  @ViewChild('searchInput', { static: false }) private searchInput: ElementRef;
  panelOpenState: boolean;
  isFocusInsideComponent = false;
  isComponentClicked = false;



  @HostListener('click')
  clickInside() {
    this.isFocusInsideComponent = true;
    this.isComponentClicked = true;
    console.log('inside container');
    console.log('xpand ?', this.xpandStatus);
  }

  @HostListener('document:click')
  clickout() {

    if (!this.isFocusInsideComponent && this.isComponentClicked) {
      // do the heavy process

      this.isComponentClicked = false;
      console.log('outside');
      this.xpandStatus = false;
      console.log('xpand ?', this.xpandStatus)
    }

    if (!this.isFocusInsideComponent && !this.xpandStatus) {
      console.log('no outside shit');
    }
    else if (this.xpandStatus && !this.isFocusInsideComponent) {
      console.log('oopss idiot thats outside')
      console.log(!this.isFocusInsideComponent)
      this.xpandStatus = false;
      if (this.xpandStatus = false) {
        console.log('Fuck it closes');
      }
    }

    this.isFocusInsideComponent = false;
  }


  constructor(private elementRef: ElementRef, private cd: ChangeDetectorRef) {
  }

  scroll(element: any) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log('it is opened')
    setTimeout(() => this.searchInput.nativeElement.focus(), 500);
    this.isFocusInsideComponent = true;
    this.xpandStatus = true;
  }



  ngOnInit() {
    console.log('status init', this.xpandStatus);
  }

  ngAfterViewInit() {


  }



  // ngOnChanges() {
  //   setTimeout(() => {
  //     this.isFocusInsideComponent = true;
  //     this.isComponentClicked = true;
  //   });
  // }



}
