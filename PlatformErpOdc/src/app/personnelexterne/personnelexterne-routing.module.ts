import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelexternePage } from './personnelexterne.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnelexternePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelexternePageRoutingModule {}
