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
  fecha: any =  new Date();
  fechaRe: string = this.fecha.toISOString();
  comercios: Comercios[];
  areatrabajo: TrabajoChofer[];
  registro: Recibir[];
  car: any;
  placasProp: string;
  Valet: string;
  choferid: string;
  idcomers: string;
  comercio: string;

  constructor( private modalCtrl: ModalController,
    private service: ModuloComerciosService,
    private photoService: PhotoService,
    private areaChofer: ModuloTrabajoChoferService,
    private recibir: ModuloRecibirAutoService,
    private storage: Storage ) { }
    
    
    ngOnInit() {
      this.storage.get('datos').then(async (val)=>{
        this.Valet=val[1];
        this.choferid=val[2];
        //console.log(this.choferid);
        this.areaChofer.getChoferTrabajo(this.choferid).subscribe(response =>{
          const comers = Object(response);
          //const comercio = comers['nombre'];
          this.idcomers= comers['id_valet'];
          //console.log("Nombre "+ comercio);
          
          this.service.getByIDComercios(this.idcomers).subscribe(responses => {
            this.comercios = responses;
            console.log(responses);        
          });
                
        });
        
      });
      
    }
    
    addPhotoGallery(){
      this.photoService.addNewToGallery();
      
    }
    
    async onSubmit(formulario: NgForm){
      //console.log(formulario.value);
      
      this.storage.get('datos').then(async(val) => {
          this.car ={
            id: null,
            id_comercios: formulario.value.id_comercios,
            id_chofer: val[2],
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
            token: '',
            condiciones: '0',
            estatus: '1'
          };
          const auto = this.car;
          //console.log(auto);
          this.recibir.recibirAuto(auto).subscribe(response =>{
            const autoRegisto = Object(response);
            //this.placasProp = autoRegisto['placas'];
            
          });
          const modal = await this.modalCtrl.create({
            component: ModalTicketPage,
            componentProps: { auto: auto }
          });
          await modal.present();
          
      });
      
    }
    

  async ngOnInitpho(){

    await this.photoService.loadSaved()
  }

}
