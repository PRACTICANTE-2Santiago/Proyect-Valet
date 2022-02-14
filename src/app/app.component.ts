import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Menu } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu: Observable<Menu[]>;
  constructor(private menuCtrl: MenuController,
              private dataService: DataService) {}

  ngOnInit(){
    this.menu = this.dataService.getMenuOptions();
  }
  mostrarMenu(){
    this.menuCtrl.open();
  }
}
