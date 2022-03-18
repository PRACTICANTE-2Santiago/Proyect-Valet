import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.page.html',
  styleUrls: ['./modal-ticket.page.scss'],
})
export class ModalTicketPage implements OnInit {
  
  @Input() auto=[];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.auto);
    
  }
  cancel(){
    this.modalCtrl.dismiss();
  }

}
