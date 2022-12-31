import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreertachesdesignationPage } from './creertachesdesignation.page';

const routes: Routes = [
  {
    path: '',
    component: CreertachesdesignationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreertachesdesignationPageRoutingModule {}
