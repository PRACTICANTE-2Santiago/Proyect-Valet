import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Modulos } from '../services/modulos.service';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/pages/services/data.service';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';
import { UsuarioChoferService } from '../services/usuario-chofer.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  modulos: Modulos = {};
  
  disconnectSubscription: any;
  connectSubscription: any;
  constructor(private menuCtrl: MenuController,
              private dataService: DataService,
              private service: UsuarioChoferService,
              private storage: Storage,
              private authService: AuthService,
               ) {}

  ngOnInit() {
     
  }
  
  mostrarMenu(){
    
    this.menuCtrl.open('menuInicio')
  }

  cerrarSesion(){
    this.storage.get('datos').then(async (val)=>{
      await this.service.updateToken(val[4], undefined).subscribe(response => {
        console.log(response);
      });
    });
    this.authService.logout();
    this.storage.remove('datos');
    this.storage.clear();
    this.disconnectSubscription.unsubscribe();
    this.connectSubscription.unsubscribe();
  }
  
}
