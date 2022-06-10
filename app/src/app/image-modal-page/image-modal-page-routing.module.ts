import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageModalPagePage } from './image-modal-page.page';

const routes: Routes = [
  {
    path: '',
    component: ImageModalPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageModalPagePageRoutingModule {}
