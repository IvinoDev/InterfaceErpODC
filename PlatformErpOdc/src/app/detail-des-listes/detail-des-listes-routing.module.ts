import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDesListesPage } from './detail-des-listes.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDesListesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDesListesPageRoutingModule {}
