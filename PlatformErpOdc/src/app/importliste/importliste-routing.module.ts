import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportlistePage } from './importliste.page';

const routes: Routes = [
  {
    path: '',
    component: ImportlistePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportlistePageRoutingModule {}
