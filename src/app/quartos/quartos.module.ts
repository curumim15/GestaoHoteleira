import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartosPageRoutingModule } from './quartos-routing.module';

import { QuartosPage } from './quartos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartosPageRoutingModule
  ],
  declarations: [QuartosPage]
})
export class QuartosPageModule {}
