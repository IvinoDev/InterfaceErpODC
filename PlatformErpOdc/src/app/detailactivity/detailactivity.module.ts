import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailactivityPageRoutingModule } from './detailactivity-routing.module';

import { DetailactivityPage } from './detailactivity.page';

import { NgxPaginationModule } from 'ngx-pagination';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailactivityPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [DetailactivityPage, ClocheComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class DetailactivityPageModule {}
