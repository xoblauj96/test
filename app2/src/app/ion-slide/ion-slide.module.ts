import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSlidePageRoutingModule } from './ion-slide-routing.module';

import { IonSlidePage } from './ion-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSlidePageRoutingModule
  ],
  declarations: [IonSlidePage]
})
export class IonSlidePageModule {}
