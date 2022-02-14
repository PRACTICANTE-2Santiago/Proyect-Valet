import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-estacionado',
  templateUrl: './modal-estacionado.page.html',
  styleUrls: ['./modal-estacionado.page.scss'],
})
export class ModalEstacionadoPage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
