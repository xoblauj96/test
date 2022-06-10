import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { SwiperOptions } from 'swiper';

import SwiperCore,{Zoom} from 'swiper'
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Zoom])


@Component({
  selector: 'app-image-modal-page',
  templateUrl: './image-modal-page.page.html',
  styleUrls: ['./image-modal-page.page.scss'],
})


export class ImageModalPagePage implements OnInit {

@ViewChild('swiper') swiper:SwiperComponent
@Input() img:string='';


config: SwiperOptions = {
  zoom: true,
  passiveListeners:false
}


  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
    if(!this.img)
    this.img='1'
    console.log(this.img+".png");
    
    document.addEventListener("keypress", (event:KeyboardEvent)=> {
      // do stuff
      console.log(event.charCode);
      if(event.charCode ===13){
        console.log(this.modalCtrl);
        
        this.close()};
    });
  }
  zoomIn:boolean = true
  zoom(){

    const zoom = this.swiper.swiperRef.zoom;
    // zoomIn ? zoom.in(): zoom.out();

    
    if(this.zoomIn==true){
      this.zoomIn=false;
      zoom.in();
    }else{
      this.zoomIn=true;
      zoom.out();
    }
    console.log(this.zoomIn);
    
  }

  close(){
    if(this.modalCtrl.create.name=="create"){
      // console.log(this.modalCtrl.create.name);
      
    this.modalCtrl.dismiss();
    }else{
      console.log("else");
      
    }
  }
}
