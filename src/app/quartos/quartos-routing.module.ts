import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuartosPage } from './quartos.page';

const routes: Routes = [
  {
    path: '',
    component: QuartosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuartosPageRoutingModule {}
