import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerSensoresPageRoutingModule } from './ver-sensores-routing.module';

import { VerSensoresPage } from './ver-sensores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerSensoresPageRoutingModule
  ],
  declarations: [VerSensoresPage]
})
export class VerSensoresPageModule {}
