import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierSallePage } from './modifier-salle.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierSallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierSallePageRoutingModule {}
