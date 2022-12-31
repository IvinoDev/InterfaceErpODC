import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolePage } from './role.page';

const routes: Routes = [
  {
    path: '',
    component: RolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolePageRoutingModule {}
