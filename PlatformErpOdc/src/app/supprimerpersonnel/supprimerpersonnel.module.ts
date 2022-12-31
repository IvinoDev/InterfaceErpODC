import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupprimerpersonnelPageRoutingModule } from './supprimerpersonnel-routing.module';

import { SupprimerpersonnelPage } from './supprimerpersonnel.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupprimerpersonnelPageRoutingModule
  ],
  declarations: [SupprimerpersonnelPage, ClocheComponent]
})
export class SupprimerpersonnelPageModule {}
