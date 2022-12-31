import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupdtiragePageRoutingModule } from './popupdtirage-routing.module';

import { PopupdtiragePage } from './popupdtirage.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupdtiragePageRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [PopupdtiragePage],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PopupdtiragePageModule {}
