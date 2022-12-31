import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailtiragePageRoutingModule } from './detailtirage-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';

import { DetailtiragePage } from './detailtirage.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailtiragePageRoutingModule,
    NgxPaginationModule

  ],
  declarations: [DetailtiragePage, ClocheComponent]
})
export class DetailtiragePageModule {}
