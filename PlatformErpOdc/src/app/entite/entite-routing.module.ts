import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntitePage } from './entite.page';

const routes: Routes = [
  {
    path: '',
    component: EntitePage
  },{
    path: 'details-entite/:id',
    loadChildren: () => import('../details-entite/details-entite.module').then( m => m.DetailsEntitePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntitePageRoutingModule {}
