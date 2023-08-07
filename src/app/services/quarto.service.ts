import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {

  private quartos: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { 
  }
// Observable 
  getQuartos() {
    return new Observable (observer => {
      fetch('./assets/data/quarto.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.quartos = json;
        observer.next(this.quartos);
        observer.complete();
      });
    })

}
//Rota
goRota(rota: string, numero: string) {
  const extras: NavigationExtras = {
    state: {
      quarto: this.quartos[numero]
    }
  }

  this.router.navigate([rota], extras);

}



getInfoQuarto() {
  return new Observable (observador => {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        const infoQuarto: any = this.router.getCurrentNavigation().extras.state.quarto;
        observador.next(infoQuarto);
        observador.complete();
      }
    });
  });
}
}
