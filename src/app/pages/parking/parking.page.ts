import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalUbicacionPage } from '../modal-ubicacion/modal-ubicacion.page';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage implements OnInit {


  listadoAutos = [
  { id: '01',
    placas: 'PLACAS01',
    accion: 'car-sport-outline',
    acciontwo: 'location-outline',
    folio: '0123'
  },
  {
    id: '02',
    placas: 'PLACAS02',
    accion: 'car-sport-outline',
    acciontwo: 'location-outline',
    folio: '01233'
  },
  {
    id: '03',
    placas: 'PLACAS03',
    accion: 'car-sport-outline',
    acciontwo: 'location-outline',
    folio: '01234'
  },
  {  id: '04',
    placas: 'PLACAS04',
    accion: 'car-sport-outline',
    acciontwo: 'location-outline',
    folio: '01235'
  }
  ]

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }
  async nextpageUbicacion(){
    const modal = await this.modalCtrl.create({
      component: ModalUbicacionPage,
      componentProps: {
        placas: 'PLACAS01'
      }
    });
    await modal.present();
  }


}
