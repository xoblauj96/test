"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1835],{1835:(U,d,o)=>{o.r(d),o.d(d,{Tab1PageModule:()=>C});var r=o(2159),g=o(9808),f=o(4182),P=o(581),p=o(9800),T=o(655),h=o(3544),t=o(2096),y=o(302),Z=o(5129),x=o(2908),c=o(9485);const _=["swiper"];function v(n,s){if(1&n&&(t.TgZ(0,"div",22),t._UZ(1,"img",23),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.MGl("src","../../assets/icon/",e.myUrL,"",t.LSH)}}h.ZP.use([h.LG]);const A=[{path:"",component:(()=>{class n{constructor(e,i,a,u,m){this.ptservice=e,this.camera=i,this.tts=a,this.platform=u,this.location=m,this.config={zoom:!0,passiveListeners:!1},this.myUrL="../../assets/icon/favicon.png"}ngOnDestroy(){this.pauseAudio(),console.log("destroy")}ngOnInit(){this.x=document.getElementById("myAudio"),this.rotateHand(),this.platform.pause.subscribe(()=>(0,T.mG)(this,void 0,void 0,function*(){alert("Pause event detected")}))}takePicture(){this.camera.getPicture({sourceType:this.camera.PictureSourceType.CAMERA,destinationType:this.camera.DestinationType.FILE_URI}).then(e=>{this.myUrL=e}).catch(e=>{console.log(e),this.error=e})}galary(){this.camera.getPicture({sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.DATA_URL}).then(e=>{this.myUrL="data:image/jpg;base64,"+e}).catch(e=>{console.log(e),this.error=e})}speak(){this.platform.is("mobileweb")?console.log("if"):console.log("else"),this.tts.speak("Hello World").then(()=>console.log("Success")).catch(e=>this.error=e)}rotateHand(){const i=document.querySelector(".seconds-container"),a=document.querySelector(".minutes-container"),u=document.querySelector(".hours-container");document.getElementById("myAudio"),setInterval(()=>{let l=new Date,O=30*l.getHours(),b=6*l.getMinutes(),k=6*l.getSeconds();u.style.transform=`rotateZ(${O+b/12}deg)`,a.style.transform=`rotateZ(${b}deg)`,i.style.transform=`rotateZ(${k}deg)`},1e3)}playAudio(){this.x.play(),this.x.muted=!1}pauseAudio(){this.x.pause(),this.x.muted=!0}goback(){this.location.back()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y.b),t.Y36(Z.V1),t.Y36(x.E),t.Y36(r.t4),t.Y36(g.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tab1"]],viewQuery:function(e,i){if(1&e&&t.Gf(_,5),2&e){let a;t.iGM(a=t.CRH())&&(i.swiper=a.first)}},decls:49,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click"],[2,"margin","30px 100px","line-height","initial"],[3,"config"],["swiper",""],["swiperSlide",""],[1,"bd"],[1,"clock"],[1,"time"],[1,"hours-container"],[1,"hours"],[1,"minutes-container"],[1,"minutes"],[1,"seconds-container"],[1,"seconds"],["id","myAudio"],["src","../../assets/ss.mp3","type","audio/mpeg"],["id","pp","type","button",3,"click"],["type","button",3,"click"],[1,"swiper-zoom-container",2,"height","250px","width","100px"],["alt","",3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Tab 1 scroll "),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t._uU(8,"Tab 1ooo"),t.qZA()()(),t._uU(9),t.TgZ(10,"ion-button",4),t.NdJ("click",function(){return i.goback()}),t._uU(11,"go back"),t.qZA(),t.TgZ(12,"ion-button",4),t.NdJ("click",function(){return i.takePicture()}),t._uU(13,"takepicture"),t.qZA(),t.TgZ(14,"ion-button",4),t.NdJ("click",function(){return i.galary()}),t._uU(15,"galary"),t.qZA(),t._UZ(16,"br"),t.TgZ(17,"div",5)(18,"swiper",6,7),t.YNc(20,v,2,1,"ng-template",8),t.qZA()(),t.TgZ(21,"ion-button",4),t.NdJ("click",function(){return i.speak()}),t._uU(22,"speak"),t.qZA(),t.TgZ(23,"div",9)(24,"div",10)(25,"div",11)(26,"span"),t._uU(27,"12"),t.qZA(),t._UZ(28,"span"),t.TgZ(29,"span"),t._uU(30,"3"),t.qZA(),t.TgZ(31,"span"),t._uU(32,"6"),t.qZA(),t.TgZ(33,"span"),t._uU(34,"9"),t.qZA(),t._UZ(35,"span"),t.qZA(),t.TgZ(36,"div",12),t._UZ(37,"div",13),t.qZA(),t.TgZ(38,"div",14),t._UZ(39,"div",15),t.qZA(),t.TgZ(40,"div",16),t._UZ(41,"div",17),t.qZA()()(),t.TgZ(42,"audio",18),t._UZ(43,"source",19),t.qZA(),t.TgZ(44,"button",20),t.NdJ("click",function(){return i.playAudio()}),t._uU(45,"Play Audio"),t.qZA(),t._uU(46," \xa0\xa0\n"),t.TgZ(47,"button",21),t.NdJ("click",function(){return i.pauseAudio()}),t._uU(48,"Pause Audio"),t.qZA()()),2&e&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(5),t.hij("\n",i.error,"\n"),t.xp6(9),t.Q6J("config",i.config))},directives:[r.Gu,r.sr,r.wd,r.W2,r.YG,c.nF,c.YC],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.bd[_ngcontent-%COMP%]{min-height:100vh;display:flex;justify-content:center;align-items:center;background:#111}.clock[_ngcontent-%COMP%]{width:14rem;height:14rem;border-radius:50%;position:relative}.clock[_ngcontent-%COMP%]:before{content:"";width:20px;height:20px;position:absolute;background:white;left:50%;top:50%;border-radius:50%;transform:translate(-50%,-50%);z-index:10;border:4px solid #313131}.time[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%}.time[_ngcontent-%COMP%]:before{content:"";width:11rem;height:10rem;position:absolute;background:#111;border-radius:37%;z-index:1}.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:25px;font-weight:600;color:#fff;font-family:cursive;border-radius:12px}.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){position:absolute;top:0}.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){position:absolute;width:13rem;height:4px;background:#beff4b;transform:rotate(133deg)}.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){position:absolute;right:4px}.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){position:absolute;bottom:4px}.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5){position:absolute;left:4px}.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6){position:absolute;width:13rem;height:4px;background:#beff4b;transform:rotate(-139deg)}.hours-container[_ngcontent-%COMP%], .minutes-container[_ngcontent-%COMP%], .seconds-container[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2}.hours[_ngcontent-%COMP%]{width:10px;height:6rem;background:linear-gradient(180deg,#00ffde,transparent);border-radius:23px 23px 10px 10px;position:absolute;left:48%;top:24%;transform-origin:50% 100%;z-index:2}.minutes[_ngcontent-%COMP%]{width:10px;height:6.5rem;background:linear-gradient(180deg,#527dff,transparent);border-radius:23px 23px 10px 10px;position:absolute;left:48%;top:14%;transform-origin:50% 100%;z-index:3}.seconds[_ngcontent-%COMP%]{width:10px;height:7.3rem;background:linear-gradient(180deg,#ff0067,transparent);border-radius:23px 23px 10px 10px;position:absolute;left:48%;top:15%;transform-origin:50% 100%;z-index:4}']}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(A)],p.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.Pc,g.ez,f.u5,P.e,M,c.kz]]}),n})()}}]);