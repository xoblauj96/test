import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-slide',
  templateUrl: './ion-slide.page.html',
  styleUrls: ['./ion-slide.page.scss'],
})
export class IonSlidePage implements OnInit {

  constructor() { }


  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  ngOnInit() {
  }

}
