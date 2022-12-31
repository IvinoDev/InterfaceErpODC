import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupprimerpersonnelPage } from './supprimerpersonnel.page';

const routes: Routes = [
  {
    path: '',
    component: SupprimerpersonnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupprimerpersonnelPageRoutingModule {}
