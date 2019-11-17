import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})
export class CommentsContainerComponent implements OnInit {
  @Input() xpandStatus: boolean;
  constructor() { }

  ngOnInit() {
  }

}
