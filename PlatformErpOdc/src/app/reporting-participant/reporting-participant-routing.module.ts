import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportingParticipantPage } from './reporting-participant.page';

const routes: Routes = [
  {
    path: '',
    component: ReportingParticipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingParticipantPageRoutingModule {}
