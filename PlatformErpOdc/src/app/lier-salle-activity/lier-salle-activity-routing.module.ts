import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LierSalleActivityPage } from './lier-salle-activity.page';

const routes: Routes = [
  {
    path: '',
    component: LierSalleActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LierSalleActivityPageRoutingModule {}
