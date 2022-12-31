import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterpersonnelPage } from './ajouterpersonnel.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterpersonnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterpersonnelPageRoutingModule {}
