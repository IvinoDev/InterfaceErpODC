import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTirageDuneListePage } from './detail-tirage-dune-liste.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTirageDuneListePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTirageDuneListePageRoutingModule {}
