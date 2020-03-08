import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MatInput } from '@angular/material';
@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})



export class CommentsContainerComponent implements OnInit {

  messages = [
    { from: "Testing", subject: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when standard dummy text ever since the 1500s, when standard dummy text ever since the 1500s, when ", date: "Mar 08, 2020" },

    { from: "Testing", subject: " but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ", date: "Mar 09, 2020" },

    { from: "Testing", subject: " but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing", date: "Mar 10, 2020" },

    { from: "Testing", subject: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when standard dummy text ever since the 1500s, when standard dummy text ever since the 1500s, when ", date: "Mar 08, 2020" },

    { from: "Testing", subject: " but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ", date: "Mar 09, 2020" },

    { from: "Testing", subject: " but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing", date: "Mar 10, 2020" }

  ];

  constructor() {
  }


  ngOnInit() {

  }


}
