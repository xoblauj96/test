import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SwiperModule } from 'swiper/angular';
// import {ImageModalPagePage} from '../image-modal-page/image-modal-page.page'
// import {ImageModalPagePageRoutingModule} from '../image-modal-page/image-modal-page-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    SwiperModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
