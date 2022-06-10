import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./homegame2/homegame2.module').then( m => m.Homegame2PageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'laocovid',
    loadChildren: () => import('./laocovid/laocovid.module').then( m => m.LaocovidPageModule)
  },
  {
    path: 'ion-slide',
    loadChildren: () => import('./ion-slide/ion-slide.module').then( m => m.IonSlidePageModule)
  },
  {
    path: 'homegame',
    loadChildren: () => import('./homegame/homegame.module').then( m => m.HomegamePageModule)
  },
  {
    path: 'homegame2',
    loadChildren: () => import('./homegame2/homegame2.module').then( m => m.Homegame2PageModule)
  },
 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
