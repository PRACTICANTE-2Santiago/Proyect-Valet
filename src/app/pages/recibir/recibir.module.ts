import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibirPageRoutingModule } from './recibir-routing.module';

import { RecibirPage } from './recibir.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibirPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecibirPage]
})
export class RecibirPageModule {}
