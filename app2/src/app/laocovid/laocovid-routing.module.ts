import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaocovidPage } from './laocovid.page';

const routes: Routes = [
  {
    path: '',
    component: LaocovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaocovidPageRoutingModule {}
