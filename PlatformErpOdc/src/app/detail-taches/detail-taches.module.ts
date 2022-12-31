import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTachesPageRoutingModule } from './detail-taches-routing.module';

import { DetailTachesPage } from './detail-taches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTachesPageRoutingModule
  ],
  declarations: [DetailTachesPage]
})
export class DetailTachesPageModule {}
