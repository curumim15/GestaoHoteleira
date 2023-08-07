import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartoPageRoutingModule } from './quarto-routing.module';

import { QuartoPage } from './quarto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartoPageRoutingModule
  ],
  declarations: [QuartoPage]
})
export class QuartoPageModule {}
