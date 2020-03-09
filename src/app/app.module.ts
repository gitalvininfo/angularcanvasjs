import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentsContainerComponent } from './components/comments-container/comments-container.component';
import { CommentButtonComponent } from './components/comment-button/comment-button.component';
import {
  MatDividerModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatBadgeModule,
  MatStepperModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartComponent } from './components/chart/chart.component';
import { CustomdatePipe } from './customdate.pipe';
import { WinlossComponent } from './components/winloss/winloss.component';
import { PieComponent } from './components/pie/pie.component';
import { AnotherpieComponent } from './components/anotherpie/anotherpie.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BlockurlDirective } from './directive/blockurl.directive';
import { ClosepanelDirective } from './directive/closepanel.directive';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { LandingComponent } from './components/landing/landing.component';
import { CustomloginComponent } from './components/customlogin/customlogin.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsContainerComponent,
    CommentButtonComponent,
    ChartComponent,
    CustomdatePipe,
    WinlossComponent,
    PieComponent,
    AnotherpieComponent,
    LoginComponent,
    SignupComponent,
    BlockurlDirective,
    ClosepanelDirective,
    LandingComponent,
    CustomloginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatBadgeModule,
    MatStepperModule,
    FlexLayoutModule,
    SnotifyModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
