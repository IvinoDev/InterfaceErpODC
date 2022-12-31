import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditactivityPageRoutingModule } from './editactivity-routing.module';

import { EditactivityPage } from './editactivity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditactivityPageRoutingModule
  ],
  declarations: [EditactivityPage]
})
export class EditactivityPageModule {}
