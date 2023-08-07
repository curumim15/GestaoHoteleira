import { Component, OnInit } from '@angular/core';
import { QuartoService } from '../services/quarto.service';


@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.page.html',
  styleUrls: ['./quarto.page.scss'],
})
export class QuartoPage implements OnInit {

  public quarto: any;
  
  constructor(private quartoServ: QuartoService ) { }

// Subscribe o Observable e pega a informaçao dos quartos desejada
ngOnInit() {
  this.quartoServ.getInfoQuarto().subscribe(infoQuarto => {
    this.quarto = infoQuarto;
  });
}
  
}
