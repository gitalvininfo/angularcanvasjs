import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';
import { GlobalService } from '../../service/global.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild("email", { static: false }) private _inputElement: ElementRef;

  constructor(private snotifyService: SnotifyService, private globalService: GlobalService) { }



  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._inputElement.nativeElement.focus();
  }

  show() {
    // this.snotifyService.confirm(this.body, this.title, this.getConfig());
    const { ...config } = this.globalService.getConfig();
    this.snotifyService.confirm(this.globalService.body, this.globalService.title, {
      ...config,
      buttons: [
        { text: 'Later', action: (toast) => { console.log('Clicked: Later'); this.snotifyService.remove(toast.id); } },
        { text: 'Close', action: (toast) => { console.log('Clicked: Close'); this.snotifyService.remove(toast.id); }, bold: true },
      ]
    });
    // this.snotifyService.confirm('Example body content', 'Example title', {
    //   timeout: 5000,
    //   showProgressBar: this.progressBar,
    //   closeOnClick: false,
    //   pauseOnHover: true,
    //   buttons: [
    //     { text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false },
    //     { text: 'No', action: () => console.log('Clicked: No') },
    //     { text: 'Later', action: (toast) => { console.log('Clicked: Later'); this.snotifyService.remove(toast.id); } },
    //     { text: 'Close', action: (toast) => { console.log('Clicked: No'); this.snotifyService.remove(toast.id); }, bold: true },
    //   ]
    // });
  }

}
