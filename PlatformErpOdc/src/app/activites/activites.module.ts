import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitesPageRoutingModule } from './activites-routing.module';

import { ActivitesPage } from './activites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitesPageRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [ActivitesPage]
})
export class ActivitesPageModule {}
