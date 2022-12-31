import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesactiverpersonnelPage } from './desactiverpersonnel.page';

const routes: Routes = [
  {
    path: '',
    component: DesactiverpersonnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesactiverpersonnelPageRoutingModule {}
