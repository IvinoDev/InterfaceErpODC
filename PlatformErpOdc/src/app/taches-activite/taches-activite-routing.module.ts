import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TachesActivitePage } from './taches-activite.page';

const routes: Routes = [
  {
    path: '',
    component: TachesActivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TachesActivitePageRoutingModule {}
