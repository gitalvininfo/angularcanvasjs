import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
export interface UserRegisterInfo {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  c_password: string;
}

@Component({
  selector: 'app-customlogin',
  templateUrl: './customlogin.component.html',
  styleUrls: ['./customlogin.component.css']
})
export class CustomloginComponent implements OnInit {
  innerWidth: any;
  showLoginForm: boolean;
  showLanding: boolean;

  //for registration
  public regForm: FormGroup;
  public emailExist: boolean;
  usernameExists: boolean;
  debouncer: any;



  constructor() {

  }


  showLogin() {
    this.showLanding = false;
  }
  goToLandingPage() {
    this.showLanding = true;
  }

  showLandingPage() {
    this.innerWidth = window.innerWidth;

    //web switch
    const loginWeb = document.getElementById('loginWeb');
    const createAccountWeb = document.getElementById('createAccountWeb');
    const signUpWeb = document.getElementById('signUpWeb');

    //mobile switch
    const createAccountMobile = document.getElementById('createAccountMobile');
    const alreadyhaveaccountMobile = document.getElementById('alreadyhaveaccountMobile');
    const getStartedMobile = document.getElementById('getStartedMobile');

    const container = document.getElementById('container');
    // container.classList.add("right-panel-active");

    loginWeb.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signUpWeb.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    createAccountWeb.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });


    createAccountMobile.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    if (getStartedMobile) {
      getStartedMobile.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });
    }

    alreadyhaveaccountMobile.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    if (this.innerWidth <= 600) {
      this.showLanding = true;
    }
    else {
      this.showLanding = false;

    }
  }

  ngOnInit() {
    this.showLandingPage();

  }

}
