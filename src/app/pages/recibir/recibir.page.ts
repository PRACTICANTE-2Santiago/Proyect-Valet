import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalTicketPage } from '../modal-ticket/modal-ticket.page';
import { Comercios } from '../services/modulo-comercios.service';
import { ModuloRecibirAutoService, Recibir } from '../services/modulo-recibir-auto.service';

@Component({
  selector: 'app-recibir',
  templateUrl: './recibir.page.html',
  styleUrls: ['./recibir.page.scss'],
})
export class RecibirPage implements OnInit {


  comercio: Comercios[];
  
  constructor( private modalCtrl: ModalController,
               private service: ModuloRecibirAutoService) { }


  ngOnInit() {
    this.service.getAll().subscribe(response => {
      //this.auto = response;
      console.log(response);
      
    })
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
