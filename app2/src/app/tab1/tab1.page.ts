import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PhotoServiceService } from '../photo-service.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import { Platform } from '@ionic/angular';
import { SwiperOptions } from 'swiper';

import SwiperCore, { Zoom } from 'swiper'
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Zoom])


import { Location } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit,OnDestroy {

  @ViewChild('swiper') swiper: SwiperComponent

  error: any

  config: SwiperOptions = {
    zoom: true,
    passiveListeners: false
  }

  x: HTMLAudioElement

  constructor(
    private ptservice: PhotoServiceService,
    private camera: Camera,
    private tts: TextToSpeechAdvanced,
    public platform: Platform,
    private location: Location
  ) {

    
  }
  ngOnDestroy() {
    this.pauseAudio();
    console.log("destroy");
    
  }
  ngOnInit() {
  this.x = document.getElementById("myAudio") as HTMLAudioElement;

    this.rotateHand();
    this.platform.pause.subscribe(async () => {
      alert('Pause event detected');
    });
  }
  myUrL = "../../assets/icon/favicon.png"
  takePicture() {
    // this.ptservice.takePicture();
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res) => {
      this.myUrL = res;
    }).catch(e => {
      console.log(e);
      this.error = e;
    })
  }

  galary() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res) => {
      this.myUrL = "data:image/jpg;base64," + res;
    }).catch(e => {
      console.log(e);
      this.error = e;
    })
  }



  speak() {
    if (this.platform.is("mobileweb")) {
      console.log("if");

    } else console.log("else")
    this.tts.speak('Hello World')
      .then(() => console.log('Success'))
      .catch((reason: any) => this.error = reason);

  }



  rotateHand() {
    const deg = 6;
    const secondHand = document.querySelector('.seconds-container') as HTMLElement;
    const minuteHand = document.querySelector('.minutes-container') as HTMLElement;
    const hourHand = document.querySelector('.hours-container') as HTMLElement;

    var x = document.getElementById("myAudio");

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;
        // this.playAudio()
      // document.getElementById('pp').click();
      hourHand.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
      minuteHand.style.transform = `rotateZ(${(mm)}deg)`
      secondHand.style.transform = `rotateZ(${(ss)}deg)`
    }, 1000);

  }


  playAudio() {
    // console.log(this.x);
    
    this.x.play();
    this.x.muted=false

  }

  pauseAudio() {
    this.x.pause();
    this.x.muted=true
  }


  goback() {
    this.location.back()
  }
}
