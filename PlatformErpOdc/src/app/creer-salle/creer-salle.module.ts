import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerSallePageRoutingModule } from './creer-salle-routing.module';

import { CreerSallePage } from './creer-salle.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerSallePageRoutingModule
  ],
  declarations: [CreerSallePage, ClocheComponent]
})
export class CreerSallePageModule {}
