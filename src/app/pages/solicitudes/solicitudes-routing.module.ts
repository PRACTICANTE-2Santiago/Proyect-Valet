import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesPage } from './solicitudes.page';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/solicitudes/solicitud',
      pathMatch: 'full',
  },
  {
    path: '',
    component: SolicitudesPage,
    children: [
      
      {
        path: 'solicitud',
        loadChildren: () => import('../modal-solicitud/modal-solicitud.module').then(m => m.ModalSolicitudPageModule)
      },
      {
        path: 'estacionados',
        loadChildren: () => import('../modal-estacionado/modal-estacionado.module').then(m => m.ModalEstacionadoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesPageRoutingModule {}
