import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Comercios, ModuloComerciosService } from '../services/modulo-comercios.service';
import { Entregados, ModuloEntregadoService } from '../services/modulo-entregado.service';
import { ModuloValetService, Valet } from '../services/modulo-valet.service';
import { Ticket, TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-modal-estacionado',
  templateUrl: './modal-estacionado.page.html',
  styleUrls: ['./modal-estacionado.page.scss'],
})
export class ModalEstacionadoPage implements OnInit {

  @Input() auto=[];

  tickets: Ticket[];
  estacionados: Entregados[];
  comer: Comercios[];
  valet: Valet[];
  comercioName: string;
  cardetails: any;
  tick: any;
  link: string;
  idValet: string;
  placas: any;
  idcar: string;
  idcomers: string;

  constructor(private service: ModuloEntregadoService,
              private generateTicket: TicketService,
              private servicecomercio: ModuloComerciosService,
              private serviceValet: ModuloValetService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.service.getAll().subscribe(response=>{
      this.estacionados = response
    });
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
          name: 'comentariosUbicado',
          type: 'text',
          placeholder:  "Comentraios: " + this.cardetails['comentarios'],
          disabled: true
        },
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

  async vercodeQR(auto: Entregados){
    //console.log(this.auto);
    this.placas = auto;
    const placa = this.placas['placas']
    console.log(placa);
    this.generateTicket.getById(placa).subscribe( response => {
      const ticketObj = Object(response);
      const comersId = ticketObj['id_comercios'];
      this.tickets = ticketObj;
      this.idcar = ticketObj['id'];

        //console.log(comersId);
      this.servicecomercio.getByIDComers(comersId).subscribe(async comercio => {
        this.comer = comercio;
        //const comersObj = Object(comercio);
        this.idValet = this.comer['id_valet'];
        this.idcomers = this.comer['id'];
        const comers = this.comer['nombre'];
        this.comercioName = comers;
        //console.log(comersObj );
       
        this.serviceValet.getByIdValet(this.idValet).subscribe(valetSer => {
          this.valet = valetSer;
          //console.log(this.valet);
          this.link =  'http://192.168.1.75/valetparking/plataforma/cliente/detalle.php?id_val='+this.idValet+'%26id='+this.idcar+'%26id_comercios='+this.idcomers;

          console.log(this.link);
          
        });
        
      });

    });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.service.getAll().subscribe(response=>{
        this.estacionados = response
      });
      event.target.complete();
    }, 200);
  }
}
