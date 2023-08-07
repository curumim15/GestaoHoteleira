import { Component, OnInit } from '@angular/core';
import { QuartoService } from '../services/quarto.service';

@Component({
  selector: 'app-quartos',
  templateUrl: './quartos.page.html',
  styleUrls: ['./quartos.page.scss'],
})
export class QuartosPage implements OnInit {

    public quartos; any;

  constructor(private quartoServ: QuartoService ) { }
// Subscribe o Observable e pega a informaçao dos quartos desejada 
  ngOnInit() {
    this.quartoServ.getQuartos().subscribe( quartos => {
      this.quartos = quartos;
    });
  }
  verQuarto(rota: string, numero: string) {
    this.quartoServ.goRota(rota, numero);
  }


}
