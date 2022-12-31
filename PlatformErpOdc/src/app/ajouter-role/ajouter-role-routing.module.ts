import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterRolePage } from './ajouter-role.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterRolePageRoutingModule {}
