import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModuloEntregadoService, Entregados } from '../services/modulo-entregado.service';

@Component({
  selector: 'app-modal-solicitud',
  templateUrl: './modal-solicitud.page.html',
  styleUrls: ['./modal-solicitud.page.scss'],
})
export class ModalSolicitudPage implements OnInit {

  Solicitados: Entregados[];
  cardetails: any;

  constructor(private service: ModuloEntregadoService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.service.getAll().subscribe(response=>{
      this.Solicitados = response;
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
}
