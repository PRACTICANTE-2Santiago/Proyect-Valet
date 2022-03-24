import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'parking',
    loadChildren: () => import('./pages/parking/parking.module').then( m => m.ParkingPageModule)
  },
  {
    path: 'recibir',
    loadChildren: () => import('./pages/recibir/recibir.module').then( m => m.RecibirPageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./pages/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
  {
    path: 'entregados',
    loadChildren: () => import('./pages/entregados/entregados.module').then( m => m.EntregadosPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modal-ticket',
    loadChildren: () => import('./pages/modal-ticket/modal-ticket.module').then( m => m.ModalTicketPageModule)
  },
  {
    path: 'modal-ubicacion',
    loadChildren: () => import('./pages/modal-ubicacion/modal-ubicacion.module').then( m => m.ModalUbicacionPageModule)
  },
  {
    path: 'modal-solicitud',
    loadChildren: () => import('./pages/modal-solicitud/modal-solicitud.module').then( m => m.ModalSolicitudPageModule)
  },
  {
    path: 'modal-estacionado',
    loadChildren: () => import('./pages/modal-estacionado/modal-estacionado.module').then( m => m.ModalEstacionadoPageModule)
  },
  {
    path: 'contrasena-info',
    loadChildren: () => import('./pages/contrasena-info/contrasena-info.module').then( m => m.ContrasenaInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
