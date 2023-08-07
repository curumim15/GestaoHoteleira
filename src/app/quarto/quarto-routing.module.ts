import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuartoPage } from './quarto.page';

const routes: Routes = [
  {
    path: '',
    component: QuartoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuartoPageRoutingModule {}
