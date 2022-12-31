import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListePersonnelEntitePage } from './liste-personnel-entite.page';

const routes: Routes = [
  {
    path: '',
    component: ListePersonnelEntitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListePersonnelEntitePageRoutingModule {}
