import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private router: Router
  ) {}

  goto_homegame2(){
    // window.location.href='../homegame2'
    this.router.navigate(['../homegame2',{name:"sorlor",lastName:'LAAB'}])
    // this.router.navigate(['../homegame2'],{queryParams:{name:"sorlor",lastName:"Lauj"}})

  }
}
