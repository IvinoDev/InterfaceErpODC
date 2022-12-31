import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutEntitePage } from './ajout-entite.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutEntitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutEntitePageRoutingModule {}
