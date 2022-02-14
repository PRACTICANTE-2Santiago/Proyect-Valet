import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSolicitudPage } from './modal-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSolicitudPageRoutingModule {}
