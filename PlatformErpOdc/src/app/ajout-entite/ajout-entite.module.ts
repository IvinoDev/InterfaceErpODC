import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutEntitePageRoutingModule } from './ajout-entite-routing.module';

import { AjoutEntitePage } from './ajout-entite.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutEntitePageRoutingModule
  ],
  declarations: [AjoutEntitePage,ClocheComponent]
})
export class AjoutEntitePageModule {}
