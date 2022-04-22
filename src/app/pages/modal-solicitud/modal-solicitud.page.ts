import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModuloEntregadoService, Entregados } from '../services/modulo-entregado.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-modal-solicitud',
  templateUrl: './modal-solicitud.page.html',
  styleUrls: ['./modal-solicitud.page.scss'],
})
export class ModalSolicitudPage implements OnInit {

  Solicitados: Entregados[];
  cardetails: any;
  entregado: any;

  constructor(private service: ModuloEntregadoService,
              private alertCtrl: AlertController,
              private cancelService: TicketService,
              private route: Router) { }

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
        },
        {
          text: 'Entregar',
          handler: () => {
            console.log('confirm');
            this.entregado = {
              id: this.cardetails['id'],
              estatus: '4'
            }
            const Entregado = this.entregado;
            //console.log(Entregado);
            this.cancelService.cancelarService(this.cardetails['id'], Entregado).subscribe(entragar =>{
              entragar;
              console.log('success');
            });
            this.route.navigate(['/home']);
          }
        }
      ]
    })
    await aler.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.service.getAll().subscribe(response=>{
        
      });
      event.target.complete();
    }, 200);
  }
}
