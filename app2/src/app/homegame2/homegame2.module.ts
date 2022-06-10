import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homegame2PageRoutingModule } from './homegame2-routing.module';

import { Homegame2Page } from './homegame2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homegame2PageRoutingModule
  ],
  declarations: [Homegame2Page]
})
export class Homegame2PageModule {}
