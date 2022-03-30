import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Comercios, ModuloComerciosService } from '../services/modulo-comercios.service';
import { ModuloValetService, Valet } from '../services/modulo-valet.service';
import { Ticket, TicketService } from '../services/ticket.service';


@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.page.html',
  styleUrls: ['./modal-ticket.page.scss'],
})
export class ModalTicketPage implements OnInit {
  
  @Input() auto=[];

  tickets: Ticket[];
  comer: Comercios[];
  valet: Valet[];
  comercioName: string;
  tick: any;
  //link: string = 'hello world';
  link: string = "http://192.168.1.64/valetparking/plataforma/cliente/detalle.php?id_val={{}}&id={{}}";

  constructor(private modalCtrl: ModalController,
              private generateTicket: TicketService,
              private servicecomercio: ModuloComerciosService,
              private serviceValet: ModuloValetService,
              private cancelService: TicketService,
              private route: Router,
              private alertCtrl: AlertController) { }

  async ngOnInit() {
    //console.log(this.auto);
    const placas = this.auto['placas'];
    this.generateTicket.getById(placas).subscribe( response => {
      const ticketObj = Object(response);
      const comersId = ticketObj['id_comercios'];
      this.tickets = ticketObj;
        //console.log(comersId);
      this.servicecomercio.getByIDComers(comersId).subscribe(async comercio => {
        this.comer = comercio;
        //const comersObj = Object(comercio);
        const idValet = this.comer['id_valet'];
        const comers = this.comer['nombre'];
        this.comercioName = comers;
        //console.log(comersObj );
       
        this.serviceValet.getByIdValet(idValet).subscribe(valetSer => {
          this.valet = valetSer;
          //console.log(this.valet);
        });
        
      });

    });
    
  }


  cancel(){
    this.modalCtrl.dismiss();
  }

  async cancelar(tickets: Ticket){
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Cancelar Ticket',
      message: 'Desea Cancelar este ticket!!',
      buttons: [
        {
          text: 'CONFIRMAR',
          cssClass: 'danger',
          handler: () =>{
            this.tick = {
              id: tickets.id,
              estatus: '0'
            }
            const Service = this.tick;
            this.cancelService.cancelarService(tickets.id, Service).subscribe(cancelar => {
              cancelar;
              this.modalCtrl.dismiss();
            });
          }
        },
        {
          text: 'Cancelar',
          handler: () =>{
            console.log('cancel');
            
          }
        }
      ]
    })
    await alert.present();
    this.route.navigate(['/home'])
  }

  imprimir(){
    this.modalCtrl.dismiss();
    this.route.navigate(['/home'])
  }

}
