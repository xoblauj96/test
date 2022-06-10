import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homegame',
  templateUrl: './homegame.page.html',
  styleUrls: ['./homegame.page.scss'],
})
export class HomegamePage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  ngOnInit() {
  }

  switch_page() {
    let url = window.location.href

    if (url.includes('/tabs/homegame'))
      this.router.navigateByUrl('homegame')
    else
      this.router.navigateByUrl('tabs/tab1')

  }
}
