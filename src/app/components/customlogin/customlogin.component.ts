import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-customlogin',
  templateUrl: './customlogin.component.html',
  styleUrls: ['./customlogin.component.css']
})
export class CustomloginComponent implements OnInit {
  innerWidth: any;
  showLoginForm: boolean;
  showLanding: boolean;
  constructor() { }

  ngOnInit() {
    this.showLandingPage();
  }
  showLogin() {
    this.showLoginForm = true;
  }
  goToLanding() {
    this.showLoginForm = false;
    this.showLanding = true;
  }

  showLandingPage() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (this.innerWidth <= 600) {
      //show the landing page if mobile
      this.showLanding = true;
      this.showLoginForm = false;
    }
    // dont show the landing page if pc
    else {
      this.showLanding = false;
      this.showLoginForm = true;
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

}
