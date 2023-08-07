import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarSensorPageRoutingModule } from './criar-sensor-routing.module';

import { CriarSensorPage } from './criar-sensor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarSensorPageRoutingModule
  ],
  declarations: [CriarSensorPage]
})
export class CriarSensorPageModule {}
