import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CriarSensorPage } from '../criar-sensor/criar-sensor.page';


@Component({
  selector: 'app-ver-sensores',
  templateUrl: './ver-sensores.page.html',
  styleUrls: ['./ver-sensores.page.scss'],
})
export class VerSensoresPage implements OnInit {

  constructor(private modalController: ModalController) { }

// codigo do model 
  async CriarSensor(){
    const modal = await this.modalController.create({
      component: CriarSensorPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
