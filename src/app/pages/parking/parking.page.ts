import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalUbicacionPage } from '../modal-ubicacion/modal-ubicacion.page';
import { Entregados, ModuloEntregadoService } from '../services/modulo-entregado.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage implements OnInit {


  UbicarAuto: Entregados[];
  cardetails: any;

  constructor(private modalCtrl: ModalController,
              private service: ModuloEntregadoService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.service.getAll().subscribe(response=>{
      this.UbicarAuto = response;
    });
  }

  vercodeQR(auto){
    
  }

  async buttonDetails(auto: Entregados){
    this.cardetails = auto;
    const aler = await this.alertCtrl.create({
      header: 'Detalles',
      inputs: [
        {
          cssClass: '--color: #ffffff;',
          name: 'placas',
          type: 'text',
          placeholder: "Placas: " + this.cardetails['placas'],
          disabled: true
        },
        {
          name: 'descricion',
          type: 'text',
          placeholder: "Descripción: " + this.cardetails['descripcion'],
          disabled: true
        },
        {
          name: 'fechaRegistro',
          type: 'text',
          placeholder: "Fecha Entrada: " + this.cardetails['fecha_registro'],
          disabled: true
        },
        {
          name: 'fechaUbicacion',
          type: 'text',
          placeholder: "Ubicado: " + this.cardetails['fecha_ubicacion'],
          disabled: true
        },
        {
          name: 'comentariossolicitud',
          type: 'text',
          placeholder:  "Comentraios: " + this.cardetails['comentarios'],
          disabled: true
        },
        {
          name: 'fechaEntregado',
          type: 'text',
          placeholder: "Fecha Solicitud: "+ this.cardetails['fecha_pedir'],
          disabled: true
        }
      ],
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('confirm');
            
          }
        }
      ]
    })
    await aler.present();
  }
  async nextpageUbicacion(auto: Entregados){
    this.cardetails = auto;
    const modal = await this.modalCtrl.create({
      component: ModalUbicacionPage,
      componentProps: {
        auto: this.cardetails
      }
    });
    await modal.present();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.service.getAll().subscribe(response=>{
        this.UbicarAuto = response;
      });
      event.target.complete();
    }, 200);
  }


}
