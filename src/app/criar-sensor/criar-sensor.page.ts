import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-criar-sensor',
  templateUrl: './criar-sensor.page.html',
  styleUrls: ['./criar-sensor.page.scss'],
})
export class CriarSensorPage implements OnInit {
  
  Tipo;
  local;
  

  constructor(private modalCtrl: ModalController,public toastController: ToastController,public alertController: AlertController) { }
  //toast
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Sensor Adicionado',
      duration: 2000
    });
    toast.present();
  }
  // Alet box para confirmar informçao do sensor
  async presentAlertConfirm() {

    const alert = await this.alertController.create({
      header: 'Confirmação do Sensor',
      message: 'Sensor do tipo: ' + this.Tipo +'<br></br>' + 'Sensor no Local:' +  this.local ,
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Criar sensor' ,
          handler:() =>{
            this.modalCtrl.dismiss({
              'dismissed':true
              
            });
            this.presentToast()
            
           
          }
        }
      ]
    });

    await alert.present();

  }



  ngOnInit() {
  }
 
  fechaCriarSensor(){

    this.modalCtrl.dismiss({
      'dismissed':true
    });

  }

}
