import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSolicitudPageRoutingModule } from './modal-solicitud-routing.module';

import { ModalSolicitudPage } from './modal-solicitud.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSolicitudPageRoutingModule,
    ComponentsModule,
    
  ],
  declarations: [ModalSolicitudPage]
})
export class ModalSolicitudPageModule {}
