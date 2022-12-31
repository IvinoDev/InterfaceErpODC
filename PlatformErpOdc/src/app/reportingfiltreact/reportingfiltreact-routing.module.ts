import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportingfiltreactPage } from './reportingfiltreact.page';

const routes: Routes = [
  {
    path: '',
    component: ReportingfiltreactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingfiltreactPageRoutingModule {}
