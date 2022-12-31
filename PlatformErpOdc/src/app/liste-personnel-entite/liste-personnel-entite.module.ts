import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListePersonnelEntitePageRoutingModule } from './liste-personnel-entite-routing.module';

import { ListePersonnelEntitePage } from './liste-personnel-entite.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListePersonnelEntitePageRoutingModule
  ],
  declarations: [ListePersonnelEntitePage, ClocheComponent]
})
export class ListePersonnelEntitePageModule {}
