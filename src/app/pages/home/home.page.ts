import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/interfaces/interfaces';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/pages/services/data.service';
import { PruebaService, Valet } from '../services/prueba.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  valet: Valet;

  
  menu: Observable<Menu[]>;

  constructor(private menuCtrl: MenuController,
              private dataService: DataService,
              private service: PruebaService) {}

  ngOnInit() {
      this.menu = this.dataService.getMenuOptions();

      this.service.getAll().subscribe(response=>{
        console.log(response);
        
      })
  }

  mostrarMenu(){
    this.menuCtrl.open();
  }

  
}
