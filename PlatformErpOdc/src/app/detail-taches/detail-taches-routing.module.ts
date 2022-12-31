import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTachesPage } from './detail-taches.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTachesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTachesPageRoutingModule {}
