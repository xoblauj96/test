import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor(
    private camera: Camera,
    private http: HttpClient
    ) {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
console.log(options);

    this.camera.getPicture(options).then(
      (imageData) => {
        console.log("======> ",imageData);
        // let base64Image = 'data:image/jpeg;base64,' + imageData;

        // Do something with the new photo
      },
      (err) => {
        // Handle error
        console.log('Camera issue: ' + err);
      }
    );
  }

  public url:string ="https://corona.lmao.ninja/v3/covid-19/countries/LAO"
  loadCovidData():Observable<any> {
   return this.http.get(this.url);
  }
}
