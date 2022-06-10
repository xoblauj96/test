import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomegamePage } from './homegame.page';

const routes: Routes = [
  {
    path: '',
    component: HomegamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomegamePageRoutingModule {}
