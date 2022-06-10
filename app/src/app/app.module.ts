import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
// import { CameraMock } from '@ionic-native-mocks/camera';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [AppComponent], //,
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     SwiperModule
    ],
  providers: [{ provide:RouteReuseStrategy,  useClass: IonicRouteStrategy },TextToSpeechAdvanced,Camera],
  bootstrap: [AppComponent],
})
export class AppModule {}
