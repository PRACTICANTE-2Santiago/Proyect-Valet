import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportesPage } from './reportes.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/reportes/estacionar',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ReportesPage,
    children: [
      {
        path: 'estacionar',
        loadChildren: ()=> import('../parking/parking.module').then(m=>m.ParkingPageModule)
      },
      {
        path: 'estacionados',
        loadChildren: ()=> import('../modal-estacionado/modal-estacionado.module').then(m=>m.ModalEstacionadoPageModule)
      },
      {
        path: 'solicitud',
        loadChildren: ()=> import('../modal-solicitud/modal-solicitud.module').then(m=>m.ModalSolicitudPageModule)
      },
      {
        path: 'entregados',
        loadChildren: ()=> import('../entregados/entregados-routing.module').then(m=>m.EntregadosPageRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesPageRoutingModule {}
