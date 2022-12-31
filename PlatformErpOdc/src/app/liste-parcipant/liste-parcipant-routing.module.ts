import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeParcipantPage } from './liste-parcipant.page';

const routes: Routes = [
  {
    path: '',
    component: ListeParcipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeParcipantPageRoutingModule {}
