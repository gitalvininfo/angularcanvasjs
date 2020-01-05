import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-customlogin',
  templateUrl: './customlogin.component.html',
  styleUrls: ['./customlogin.component.css']
})
export class CustomloginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const signUpButton = document.getElementById('signUp');
    const ghostUpButton = document.getElementById('ghostsignUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    ghostUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
  }

}
