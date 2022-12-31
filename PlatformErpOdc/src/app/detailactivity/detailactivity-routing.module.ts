import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailactivityPage } from './detailactivity.page';

const routes: Routes = [
  {
    path: '',
    component: DetailactivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailactivityPageRoutingModule {}
