import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelPageRoutingModule } from './personnel-routing.module';

import { PersonnelPage } from './personnel.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [PersonnelPage, ClocheComponent]
})
export class PersonnelPageModule {}
