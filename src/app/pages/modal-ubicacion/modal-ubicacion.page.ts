import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation }  from '@ionic-native/geolocation/ngx'
import { NgForm } from '@angular/forms';
import { TicketService } from '../services/ticket.service';
import { ModalTicketPage } from '../modal-ticket/modal-ticket.page';
import { ModuloRecibirAutoService } from '../services/modulo-recibir-auto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-ubicacion',
  templateUrl: './modal-ubicacion.page.html',
  styleUrls: ['./modal-ubicacion.page.scss'],
})
export class ModalUbicacionPage implements OnInit {

  @Input() auto=[];
  fecha: any = new Date();
  fechaub: string = this.fecha.toISOString();
  idplacas: string;
  placas: string;
  latitud: string;
  longitud: string;
  ubication: any;

  constructor(private modalCtrl: ModalController,
              private geolocation: Geolocation,
              private guardarUbicacion: ModuloRecibirAutoService,
              private route: Router) { }

  async ngOnInit() {

    this.geolocation.getCurrentPosition().then((resp)=> {
      console.log('latitude: '+resp.coords.latitude);
      this.latitud = resp.coords.latitude.toString();
      console.log('longitude: '+resp.coords.longitude);
      this.longitud = resp.coords.longitude.toString();
    }).catch((error)=> {
      console.log('Error getting location', error);
      
    });

    this.placas = this.auto['placas'];
    this.idplacas = this.auto['id'];
    console.log(this.idplacas);
    
  }

  cancel(){
    this.modalCtrl.dismiss();
  }

  async onSubmit(formulario: NgForm){
    let aleatorio = Math.floor(Math.random() * (10000 - 0)) + 0;
    this.ubication ={
      //id: this.idplacas,
      id_ubicacion: aleatorio,
      latitud: this.latitud,
      longitud: this.longitud,
      comentarios: formulario.value.comentarios,
      fecha_ubicacion: this.fechaub,
      estatus: '2'
    }
    const auto = this.ubication;
    console.log(auto);
    
    this.guardarUbicacion.actualizar(this.idplacas, auto).subscribe(actualizar => {
      actualizar;
      this.modalCtrl.dismiss();
    });
    
    this.route.navigate(['/home'])
  }

}
