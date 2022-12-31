import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardPageRoutingModule,
    IonicModule.forRoot(),HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [DashboardPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
  
})
export class DashboardPageModule {}
