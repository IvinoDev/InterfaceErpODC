import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { NgxSpinnerModule } from "ngx-spinner";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
