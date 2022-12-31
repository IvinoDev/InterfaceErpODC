import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelexternePageRoutingModule } from './personnelexterne-routing.module';

import { PersonnelexternePage } from './personnelexterne.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelexternePageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [PersonnelexternePage,ClocheComponent]
})
export class PersonnelexternePageModule {}
