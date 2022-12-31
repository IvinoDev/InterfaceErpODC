import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditactivityPage } from './editactivity.page';

const routes: Routes = [
  {
    path: '',
    component: EditactivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditactivityPageRoutingModule {}
