import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiragePage } from './tirage.page';



const routes: Routes = [
  {
    path: '',
    component: TiragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiragePageRoutingModule {}
