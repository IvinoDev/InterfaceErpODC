import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SallePage } from './salle.page';

const routes: Routes = [
  {
    path: '',
    component: SallePage
  },

  {
    path: 'creer-salle',
    loadChildren: () => import('../creer-salle/creer-salle.module').then( m => m.CreerSallePageModule)
  },

  {
    path: 'modifier-salle/:id',
    loadChildren: () => import('../modifier-salle/modifier-salle.module').then( m => m.ModifierSallePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SallePageRoutingModule {}
