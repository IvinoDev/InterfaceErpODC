import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntitePageRoutingModule } from './entite-routing.module';

import { EntitePage } from './entite.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntitePageRoutingModule
  ],
  declarations: [EntitePage, ClocheComponent]
})
export class EntitePageModule {}
