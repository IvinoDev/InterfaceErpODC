import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TachedesignationPage } from './tachedesignation.page';

const routes: Routes = [
  {
    path: '',
    component: TachedesignationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TachedesignationPageRoutingModule {}
