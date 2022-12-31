import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportingParticipantPageRoutingModule } from './reporting-participant-routing.module';

import { ReportingParticipantPage } from './reporting-participant.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportingParticipantPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [ReportingParticipantPage, ClocheComponent]
})
export class ReportingParticipantPageModule {}
