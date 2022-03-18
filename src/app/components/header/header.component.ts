import {Component, Input} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Modulos } from 'src/app/pages/services/modulos.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent{

    modulos: Modulos = {};
    
    @Input() titulo: string = '';
    
    constructor(private menuCtrl: MenuController){}
    mostrarMenu(){
        this.menuCtrl.enable(true, 'menuPrincipal');
        this.menuCtrl.open('menuPrincipal')
      }
}