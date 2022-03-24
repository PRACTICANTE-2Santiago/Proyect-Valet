import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalTicketPage } from '../modal-ticket/modal-ticket.page';
import { ModuloComerciosService, Comercios } from '../services/modulo-comercios.service';
import { ModuloTrabajoChoferService, TrabajoChofer } from '../services/modulo-trabajo-chofer.service';
import { CarPhoto, PhotoService } from '../services/photo.service';
import { ModuloRecibirAutoService, Recibir} from '../services/modulo-recibir-auto.service';
import { Storage } from '@ionic/storage'


@Component({
  selector: 'app-recibir',
  templateUrl: './recibir.page.html',
  styleUrls: ['./recibir.page.scss'],
})
export class RecibirPage implements OnInit {

  
  image: CarPhoto[];
  fechaRe: string = new Date().toISOString();
  comercio: Comercios[];
  areatrabajo: TrabajoChofer[];
  registro: Recibir[];
  car: any;
  recibido: any;


  constructor( private modalCtrl: ModalController,
    private service: ModuloComerciosService,
    private photoService: PhotoService,
    private areaChofer: ModuloTrabajoChoferService,
    private recibir: ModuloRecibirAutoService,
    private storage: Storage ) { }
    
    
    ngOnInit() {
      this.storage.create();
      const id = '2';
      const id_chofer = '2';
      this.service.getByIDComercios(id).subscribe(response => {
        this.comercio = response;
        console.log(response);        
      });
      this.areaChofer.getChoferTrabajo(id_chofer).subscribe(response =>{
        console.log(response);
        
      })
    }
    
    addPhotoGallery(){
      this.photoService.addNewToGallery();
      
    }
    
    onSubmit(formulario: NgForm){
      console.log(formulario.value);
      
      this.storage.get('datos').then(async(val) => {
          this.car ={
            id: null,
            id_comercios: formulario.value.id_comercios,
            id_chofer: '2',
            placas: formulario.value.placas,
            descripcion: formulario.value.descripcion,
            foto1: 'none',
            foto2: 'none',
            foto3: 'none',
            id_registro: formulario.value.fecharegistro,
            fecha_registro: formulario.value.fecharegistro,
            id_ubicacion: null,
            latitud: null,
            longitud: null,
            comentarios: null,
            fecha_ubicacion: null,
            fecha_pedir: null,
            id_entrega: null,
            fecha_entregado: null,
            comentarios_entregado: null,
            fecha_notificado: null,
            comentarios_cliente: null,
            token: 'cbwiuehfywxh8h92hinxi2nj',
            condiciones: '1',
            estatus: '1'
          };
          const auto = this.car;
          console.log(auto);
          this.recibir.recibirAuto(auto).subscribe(response =>{
                response
          });
      });
     
    }

    async nextpage(auto){
    
    //this.service.recibirAuto(registro).subscribe(response =>console.log(response));
    const modal = await this.modalCtrl.create({
      component: ModalTicketPage,
      componentProps: {
        auto
      }
    });
    await modal.present();
  }

  async ngOnInitpho(){

    await this.photoService.loadSaved()
  }

}
