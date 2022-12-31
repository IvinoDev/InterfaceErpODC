import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImporterListeparticipantPageRoutingModule } from './importer-listeparticipant-routing.module';

import { ImporterListeparticipantPage } from './importer-listeparticipant.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImporterListeparticipantPageRoutingModule
    
  ],
  declarations: [ImporterListeparticipantPage, ClocheComponent]
})
export class ImporterListeparticipantPageModule {}
