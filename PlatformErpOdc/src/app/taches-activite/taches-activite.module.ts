import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachesActivitePageRoutingModule } from './taches-activite-routing.module';

import { TachesActivitePage } from './taches-activite.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachesActivitePageRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [TachesActivitePage, ClocheComponent],
})
export class TachesActivitePageModule {}
