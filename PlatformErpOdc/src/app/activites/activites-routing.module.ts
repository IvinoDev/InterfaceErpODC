import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitesPage } from './activites.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitesPage
  },
  {
    path: 'importer-participant/:id',
    loadChildren: () => import('../importer-listeparticipant/importer-listeparticipant.module').then( m => m.ImporterListeparticipantPageModule)
  },

  {
    path: 'creer-activites',
    loadChildren: () => import('../creer-activites/creer-activites.module').then( m => m.CreerActivitesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitesPageRoutingModule {}
