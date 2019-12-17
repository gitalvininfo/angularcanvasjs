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


  constructor(private elementRef: ElementRef, private cd: ChangeDetectorRef) {
  }

  scroll(element: any) {

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log('it is opened')
    setTimeout(() => this.searchInput.nativeElement.focus(), 500);

  }



  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.usrFld.nativeElement.focus(); this.cd.detectChanges();


  }



  // ngOnChanges() {
  //   setTimeout(() => {
  //     console.log('Current State', this.xpandStatus);
  //   });
  // }



}
