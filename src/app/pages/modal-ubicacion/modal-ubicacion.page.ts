import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ubicacion',
  templateUrl: './modal-ubicacion.page.html',
  styleUrls: ['./modal-ubicacion.page.scss'],
})
export class ModalUbicacionPage implements OnInit {


  @Input() placas: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  cancel(){
    this.modalCtrl.dismiss();
  }

}
