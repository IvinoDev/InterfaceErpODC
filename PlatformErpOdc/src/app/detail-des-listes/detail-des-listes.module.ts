import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

//import { DetailDesListesPageRoutingModule } from './detail-des-listes-routing.module';

import { DetailDesListesPageRoutingModule } from '../detail-des-listes/detail-des-listes-routing.module';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';
import { DetailDesListesPage } from './detail-des-listes.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDesListesPageRoutingModule,
    NgxPaginationModule,
    //Ng2SearchPipeModule,
  ],
  declarations: [DetailDesListesPage, ClocheComponent]
})
export class DetailDesListesPageModule {}
