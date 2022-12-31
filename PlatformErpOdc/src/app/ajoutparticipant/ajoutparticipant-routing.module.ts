import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutparticipantPage } from './ajoutparticipant.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutparticipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutparticipantPageRoutingModule {}
