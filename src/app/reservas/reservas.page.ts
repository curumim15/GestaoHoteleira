import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  

  nome;
  tele;
  email;
  adultos;
  criancas;
  tipo;
  entrada;
  saida;
  paga;
  quarto=false;
  limp=false;

  constructor(public navCtrl: NavController,public toastController: ToastController,public alertController: AlertController) { 

  }


  // Codigo do Toast
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Reserva Adicionada',
      duration: 2000
    });
    toast.present();
  }
  // Codigo da AlertBox
  async presentAlertConfirm() {

    const alert = await this.alertController.create({
      header: 'Confirmação da Reserva',
      message: 'Nome: '  + this.nome +'<br></br>'+ 
      'Telemovel: ' + this.tele +'<br></br>'+
       'Email: ' + this.email  +'<br></br>'+
       'Adultos: '+ this.adultos +'<br></br>'+
       'Criança: '+ this.criancas +'<br></br>'+
       'Tipo do quarto: ' + this.tipo +'<br></br>'+
       'Data de entrada: '+ this.entrada +'<br></br>'+
       'Data de saida: '+ this.saida +'<br></br>'+
       'Tipo de pagamento: '+ this.paga +'<br></br>'+
       'Serviços de Limpeza: ' + this.limp +'<br></br>'+
       'Serviço de quartos: ' + this.quarto ,
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Confirmar',
          handler:() =>{
            this.navCtrl.navigateRoot("/lobby");
            this.presentToast()
          }
          
        }
      ]
    });

    await alert.present();

  }

  ngOnInit() {
    
  }

}
