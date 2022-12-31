import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportingfiltrepartPage } from './reportingfiltrepart.page';

const routes: Routes = [
  {
    path: '',
    component: ReportingfiltrepartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingfiltrepartPageRoutingModule {}
