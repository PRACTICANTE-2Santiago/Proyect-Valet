import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.page.html',
  styleUrls: ['./modal-ticket.page.scss'],
})
export class ModalTicketPage implements OnInit {
  
  @Input() auto=[];

  //link: string = 'hello world';
  link: string = "http://192.168.1.64/valetparking/plataforma/cliente/detalle.php?id_val=2&id=Lambo";

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.auto);
    
  }
  cancel(){
    this.modalCtrl.dismiss();
  }

}
