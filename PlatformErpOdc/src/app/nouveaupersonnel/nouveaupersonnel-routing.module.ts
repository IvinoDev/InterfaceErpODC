import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveaupersonnelPage } from './nouveaupersonnel.page';

const routes: Routes = [
  {
    path: '',
    component: NouveaupersonnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveaupersonnelPageRoutingModule {}
