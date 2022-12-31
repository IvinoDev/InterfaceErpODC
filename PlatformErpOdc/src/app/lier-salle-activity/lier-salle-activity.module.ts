import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { IonicModule } from '@ionic/angular';

import { LierSalleActivityPageRoutingModule } from './lier-salle-activity-routing.module';

import { LierSalleActivityPage } from './lier-salle-activity.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LierSalleActivityPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [LierSalleActivityPage, ClocheComponent]
})
export class LierSalleActivityPageModule {}
