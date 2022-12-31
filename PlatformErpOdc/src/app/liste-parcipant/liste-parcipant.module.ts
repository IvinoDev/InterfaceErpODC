import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ListeParcipantPageRoutingModule } from './liste-parcipant-routing.module';

import { ListeParcipantPage } from './liste-parcipant.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeParcipantPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [ListeParcipantPage]
})
export class ListeParcipantPageModule {}
