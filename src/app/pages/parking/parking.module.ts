import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingPageRoutingModule } from './parking-routing.module';

import { ParkingPage } from './parking.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ParkingPage]
})
export class ParkingPageModule {}
