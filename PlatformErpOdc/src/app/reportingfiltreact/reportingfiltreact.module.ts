import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportingfiltreactPageRoutingModule } from './reportingfiltreact-routing.module';

import { ReportingfiltreactPage } from './reportingfiltreact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportingfiltreactPageRoutingModule
  ],
  declarations: [ReportingfiltreactPage]
})
export class ReportingfiltreactPageModule {}
