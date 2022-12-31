import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerActivitesPage } from './creer-activites.page';

const routes: Routes = [
  {
    path: '',
    component: CreerActivitesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerActivitesPageRoutingModule {}
