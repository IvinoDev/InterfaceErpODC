import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolePageRoutingModule } from './role-routing.module';

import { RolePage } from './role.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolePageRoutingModule
  ],
  declarations: [RolePage, ClocheComponent]
})
export class RolePageModule {}
