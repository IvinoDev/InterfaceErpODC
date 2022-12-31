import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportingPageRoutingModule } from './reporting-routing.module';

import { ReportingPage } from './reporting.page';
import {MatTabsModule} from '@angular/material/tabs';
import { ClocheComponent } from '../cloche/cloche.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTabsModule,
    ReportingPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [ReportingPage,ClocheComponent]
})
export class ReportingPageModule {}
