import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachedesignationPageRoutingModule } from './tachedesignation-routing.module';

import { TachedesignationPage } from './tachedesignation.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachedesignationPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [TachedesignationPage, ClocheComponent]
})
export class TachedesignationPageModule {}
