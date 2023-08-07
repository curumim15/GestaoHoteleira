import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarSensorPage } from './criar-sensor.page';

const routes: Routes = [
  {
    path: '',
    component: CriarSensorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarSensorPageRoutingModule {}
