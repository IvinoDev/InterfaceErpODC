import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterpersonnelPageRoutingModule } from './ajouterpersonnel-routing.module';

import { AjouterpersonnelPage } from './ajouterpersonnel.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterpersonnelPageRoutingModule
  ],
  declarations: [AjouterpersonnelPage, ClocheComponent]
})
export class AjouterpersonnelPageModule {}
