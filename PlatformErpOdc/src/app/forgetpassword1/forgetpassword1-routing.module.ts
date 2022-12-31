import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Forgetpassword1Page } from './forgetpassword1.page';

const routes: Routes = [
  {
    path: '',
    component: Forgetpassword1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Forgetpassword1PageRoutingModule {}
