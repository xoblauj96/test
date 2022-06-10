import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homegame2',
  templateUrl: './homegame2.page.html',
  styleUrls: ['./homegame2.page.scss'],
})
export class Homegame2Page implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }
  ngOnDestroy(): void {
    console.log("homegame2 destroy");

    // throw new Error('Method not implemented.');
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  ngOnInit() {
    this.click_body_close_like();
    this.getvalueFromUrl();
  }

getvalueFromUrl() {
  // this.activeRoute.queryParams.subscribe(r=>{
  //   console.log(r.name);
  //   console.log(r);
    
  // })

  this.activeRoute.params.subscribe(r=>{
    console.log(r.name);
    console.log(r);
    
  })
}



  switch_page() {
    let url = window.location.href
    navigator.clipboard.writeText("Hello World"+url);

    if (url.includes('/tabs/homegame'))
      this.router.navigateByUrl('homegame2')
    else
      this.router.navigateByUrl('tabs/tab1')

  }




  toggle_like() {

    let toggle: any = document.querySelector('.opt') as HTMLElement;
    toggle.style.transition = 'right .4s, opacity .5s ';

    console.log(toggle);


    toggle.classList.toggle('options');
    let toggle1: any = document.querySelector('.options') as HTMLElement;
    if (toggle1){

      toggle1.style.transition = 'right .2s, opacity .4s ';
    }

  }






  click_body_close_like() {
    let content = document.querySelector('#bg') as HTMLElement;
    // console.log(content);

    content.addEventListener('click', () => {
      this.closs_like();
    })
  }




  closs_like() {
    let toggle: any = document.querySelector('.opt') as HTMLElement;
    
    if (toggle.classList.contains('options')) {
      toggle.classList.remove('options')
    }
  }





  pressLike(num: number) {
    alert("select: "+num)
    console.log("num: ", num);
    this.closs_like();
  }



public i:any 
  setImage(img:string){
    console.log(img);
    this.i = img;
  }

  
}
