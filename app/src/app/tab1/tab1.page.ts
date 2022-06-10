import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoServiceService } from '../photo-service.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import { Platform } from '@ionic/angular';
import { SwiperOptions } from 'swiper';

import SwiperCore,{Zoom} from 'swiper'
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Zoom])


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild('swiper') swiper:SwiperComponent

 

  config: SwiperOptions = {
    zoom: true,
    passiveListeners:false
  }


  constructor(
    private ptservice: PhotoServiceService,
    private camera: Camera,
    private tts: TextToSpeechAdvanced,
    public platform: Platform
    ) {

      
    }
  ngOnInit() {
    
    this.platform.pause.subscribe(async () => {
      alert('Pause event detected');
    });
  }
myUrL="../../assets/icon/favicon.png"
  takePicture(){
    // this.ptservice.takePicture();
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res)=>{
      this.myUrL = res;
    }).catch(e=>{
      console.log(e);
      
    })
  }

  galary(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res)=>{
      this.myUrL = "data:image/jpg;base64,"+res;
    }).catch(e=>{
      console.log(e);
      
    })
  }



  speak(){
    if(this.platform.is("mobileweb")){
      console.log("if");
      
    }else console.log("else")
    this.tts.speak('Hello World')
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log("---> ",reason));

  }
}
