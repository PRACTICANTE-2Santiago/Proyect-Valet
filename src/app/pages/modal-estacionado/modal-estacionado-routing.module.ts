import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEstacionadoPage } from './modal-estacionado.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEstacionadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEstacionadoPageRoutingModule {}
