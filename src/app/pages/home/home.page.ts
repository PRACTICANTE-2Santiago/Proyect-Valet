import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/interfaces/interfaces';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  menu: Observable<Menu[]>;

  constructor(private menuCtrl: MenuController,
              private dataService: DataService ) {}

  ngOnInit() {
      this.menu = this.dataService.getMenuOptions();
  }

  mostrarMenu(){
    this.menuCtrl.open();
  }
  
}
