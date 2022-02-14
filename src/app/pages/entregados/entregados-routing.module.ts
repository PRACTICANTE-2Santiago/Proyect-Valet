import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregadosPage } from './entregados.page';

const routes: Routes = [
  {
    path: '',
    component: EntregadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregadosPageRoutingModule {}
