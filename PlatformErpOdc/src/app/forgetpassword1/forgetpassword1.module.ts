import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Forgetpassword1PageRoutingModule } from './forgetpassword1-routing.module';

import { Forgetpassword1Page } from './forgetpassword1.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Forgetpassword1PageRoutingModule
  ],
  declarations: [Forgetpassword1Page, ClocheComponent]
})
export class Forgetpassword1PageModule {}
