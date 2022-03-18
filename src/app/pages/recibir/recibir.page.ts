import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalTicketPage } from '../modal-ticket/modal-ticket.page';
import { ModuloComerciosService, Comercios } from '../services/modulo-comercios.service';
import { CarPhoto, PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-recibir',
  templateUrl: './recibir.page.html',
  styleUrls: ['./recibir.page.scss'],
})
export class RecibirPage implements OnInit {

  car: CarPhoto[];
  comercio: Comercios[];
  
  constructor( private modalCtrl: ModalController,
    private service: ModuloComerciosService,
    private photoService: PhotoService) { }
    
    
    ngOnInit() {
      this.service.getAllComercios().subscribe(response => {
        //this.auto = response;
        console.log(response);
        
      })
    }
    
    addPhotoGallery(){
      this.photoService.addNewToGallery();
      
    }
    
    onSubmit(){
      //console.log(formulario);
    }
    async nextpage(formulario: NgForm ){
    
    //this.service.recibirAuto(registro).subscribe(response =>console.log(response));
    const modal = await this.modalCtrl.create({
      component: ModalTicketPage,
      componentProps: {
        
      }
    });
    await modal.present();
  }

}
