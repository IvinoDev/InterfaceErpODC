import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiaisonsallePageRoutingModule } from './liaisonsalle-routing.module';

import { LiaisonsallePage } from './liaisonsalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    LiaisonsallePageRoutingModule
  ],
  declarations: [LiaisonsallePage]
})
export class LiaisonsallePageModule {}
