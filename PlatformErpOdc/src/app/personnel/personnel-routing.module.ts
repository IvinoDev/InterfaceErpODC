import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelPage } from './personnel.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelPageRoutingModule {}
