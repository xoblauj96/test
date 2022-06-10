import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { ImageModalPagePage } from '../image-modal-page/image-modal-page.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 
  config: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween: 20,
    // centeredSlides: true
  }
  constructor(
    private modalCtrl: ModalController,

  ) {}


async openPreview(img){
const modal = await this.modalCtrl.create({
  component: ImageModalPagePage,
  componentProps:{
    img
  },
  cssClass:'transparent-modal'
});
modal.present();
}

}
