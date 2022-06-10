import { Component, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';

import SwiperCore,{Zoom} from 'swiper'
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Zoom])


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('swiper') swiper:SwiperComponent
  config: SwiperOptions = {
    zoom: true,
    passiveListeners:false
  }
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() {}

}
