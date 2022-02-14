import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-solicitud',
  templateUrl: './modal-solicitud.page.html',
  styleUrls: ['./modal-solicitud.page.scss'],
})
export class ModalSolicitudPage implements OnInit {

  listadoAutos = [
    {
      id: '01',
      placas: 'PLACAS01',
      accion: 'car-sport-outline',
      solicitud: 'Requerido'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
