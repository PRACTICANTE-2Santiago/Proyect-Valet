import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEstacionadoPageRoutingModule } from './modal-estacionado-routing.module';

import { ModalEstacionadoPage } from './modal-estacionado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEstacionadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalEstacionadoPage]
})
export class ModalEstacionadoPageModule {}
