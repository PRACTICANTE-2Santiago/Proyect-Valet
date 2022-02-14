import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalTicketPage } from '../modal-ticket/modal-ticket.page';

@Component({
  selector: 'app-recibir',
  templateUrl: './recibir.page.html',
  styleUrls: ['./recibir.page.scss'],
})
export class RecibirPage implements OnInit {


  auto = {
    placas:'',
    descripcion: '',
    password: ''
  }

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm){
    console.log(this.auto);
    console.log(formulario);
  }
  async nextpage(){
    const modal = await this.modalCtrl.create({
      component: ModalTicketPage
    });
    await modal.present();
  }

}
