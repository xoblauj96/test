import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSlidePage } from './ion-slide.page';

const routes: Routes = [
  {
    path: '',
    component: IonSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSlidePageRoutingModule {}
