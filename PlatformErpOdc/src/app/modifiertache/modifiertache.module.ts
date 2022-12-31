import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifiertachePageRoutingModule } from './modifiertache-routing.module';

import { ModifiertachePage } from './modifiertache.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifiertachePageRoutingModule
  ],
  declarations: [ModifiertachePage,ClocheComponent]
})
export class ModifiertachePageModule {}
