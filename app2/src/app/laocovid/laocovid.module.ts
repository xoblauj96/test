import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaocovidPageRoutingModule } from './laocovid-routing.module';

import { LaocovidPage } from './laocovid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaocovidPageRoutingModule
  ],
  declarations: [LaocovidPage]
})
export class LaocovidPageModule {}
