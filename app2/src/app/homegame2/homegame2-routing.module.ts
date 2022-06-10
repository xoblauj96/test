import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homegame2Page } from './homegame2.page';

const routes: Routes = [
  {
    path: '',
    component: Homegame2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homegame2PageRoutingModule {}
