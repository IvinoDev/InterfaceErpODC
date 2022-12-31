import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TiragePageRoutingModule } from './tirage-routing.module';
import { TiragePage } from './tirage.page';
import { ClocheComponent } from '../cloche/cloche.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiragePageRoutingModule
  ],
  declarations: [TiragePage, ClocheComponent]
})
export class TiragePageModule {}
