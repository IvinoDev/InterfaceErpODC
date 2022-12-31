import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerSallePage } from './creer-salle.page';

const routes: Routes = [
  {
    path: '',
    component: CreerSallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerSallePageRoutingModule {}
