import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiaisonsallePage } from './liaisonsalle.page';

const routes: Routes = [
  {
    path: '',
    component: LiaisonsallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiaisonsallePageRoutingModule {}
