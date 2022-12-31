import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsEntitePage } from './details-entite.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsEntitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsEntitePageRoutingModule {}
