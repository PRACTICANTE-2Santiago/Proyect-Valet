import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.page.html',
  styleUrls: ['./modal-ticket.page.scss'],
})
export class ModalTicketPage implements OnInit {
  
  @Input() auto=[];

  constructor() { }

  ngOnInit() {
    console.log(this.auto);
    
  }

}
