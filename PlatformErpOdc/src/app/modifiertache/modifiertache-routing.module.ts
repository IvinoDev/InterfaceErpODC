import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifiertachePage } from './modifiertache.page';

const routes: Routes = [
  {
    path: '',
    component: ModifiertachePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifiertachePageRoutingModule {}
