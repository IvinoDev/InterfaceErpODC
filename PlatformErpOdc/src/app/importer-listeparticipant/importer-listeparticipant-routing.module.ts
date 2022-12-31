import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImporterListeparticipantPage } from './importer-listeparticipant.page';

const routes: Routes = [
  {
    path: '',
    component: ImporterListeparticipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImporterListeparticipantPageRoutingModule {}
