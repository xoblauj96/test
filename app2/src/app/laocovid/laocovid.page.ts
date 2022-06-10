import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../photo-service.service';

@Component({
  selector: 'app-laocovid',
  templateUrl: './laocovid.page.html',
  styleUrls: ['./laocovid.page.scss'],
})
export class LaocovidPage implements OnInit {

  covidList: any

  constructor(
    private photoService: PhotoServiceService
  ) { }

  ngOnInit() {
    this.loadCovidData();
  }

  loadCovidData() {
    this.photoService.loadCovidData().subscribe(r=>{
      console.log(r);
      this.covidList = r;
    })
  }
}
