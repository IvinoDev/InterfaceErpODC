import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailpostulantPage } from './detailpostulant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailpostulantPage

  },
  // {
  //   path: 'modifierpersonnel',
  //   component: ModifierpersonnelPage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailpostulantPageRoutingModule {}
