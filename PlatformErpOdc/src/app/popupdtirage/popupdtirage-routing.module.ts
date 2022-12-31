import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupdtiragePage } from './popupdtirage.page';

const routes: Routes = [
  {
    path: '',
    component: PopupdtiragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupdtiragePageRoutingModule {}
