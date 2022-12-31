import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportingfiltrepartPageRoutingModule } from './reportingfiltrepart-routing.module';

import { ReportingfiltrepartPage } from './reportingfiltrepart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportingfiltrepartPageRoutingModule
  ],
  declarations: [ReportingfiltrepartPage]
})
export class ReportingfiltrepartPageModule {}
