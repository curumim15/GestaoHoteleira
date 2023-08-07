import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'quartos',
    loadChildren: () => import('./quartos/quartos.module').then( m => m.QuartosPageModule)
  },
  {
    path: 'ver-sensores',
    loadChildren: () => import('./ver-sensores/ver-sensores.module').then( m => m.VerSensoresPageModule)
  },
  {
    path: 'lobby',
    loadChildren: () => import('./lobby/lobby.module').then( m => m.LobbyPageModule)
  },
  {
    path: 'criar-sensor',
    loadChildren: () => import('./criar-sensor/criar-sensor.module').then( m => m.CriarSensorPageModule)
  },
  {
    path: 'quarto',
    loadChildren: () => import('./quarto/quarto.module').then( m => m.QuartoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
