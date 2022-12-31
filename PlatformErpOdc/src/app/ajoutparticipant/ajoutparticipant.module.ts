import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutparticipantPageRoutingModule } from './ajoutparticipant-routing.module';

import { AjoutparticipantPage } from './ajoutparticipant.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutparticipantPageRoutingModule
  ],
  declarations: [AjoutparticipantPage,ClocheComponent]
})
export class AjoutparticipantPageModule {}
