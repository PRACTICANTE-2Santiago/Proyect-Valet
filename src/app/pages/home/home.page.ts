import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Modulos } from '../services/modulos.service';
import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { DataService } from 'src/app/pages/services/data.service';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';
import { Chofer, UsuarioChoferService } from '../services/usuario-chofer.service';
import { Router } from '@angular/router';
import { ModuloTrabajoChoferService, TrabajoChofer } from '../services/modulo-trabajo-chofer.service';
import { Comercios } from '../services/modulo-comercios.service';
import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  modulos: Modulos = {};
  usuario: string;
  disconnectSubscription: any;
  connectSubscription: any;
  emailFb: string;
  Valet: string;
  comercio: Comercios[];

  constructor(private platform: Platform,
              private menuCtrl: MenuController,
              private dataService: DataService,
              private service: UsuarioChoferService,
              private storage: Storage,
              private authService: AuthService,
              private alertController: AlertController,
              private network: Network,
              private router: Router,
              private navCtrl: NavController,
              private serviceChofer: UsuarioChoferService,
              private moduloTrabajo: ModuloTrabajoChoferService)
            { this.platform.backButton.subscribeWithPriority(10, ()=>{
              if(router.url === '/home'){
                navigator['app'].exitApp();
              }else{
                navCtrl.back();
              }
            })}

    ionViewWillEnter(){
      this.ngOnInit();
    }

    init(){
      this.storage.get('datos').then(async (val)=>{
        this.Valet=val[1];
        //console.log(this.Valet);

        this.serviceChofer.getById(val[2]).subscribe(async user =>{
          const choferObj= Object(user);
          const usuario = choferObj as Chofer;
          //console.log(usuario);
          this.moduloTrabajo.getChoferTrabajo(val[2]).subscribe(modTrabajo => {
            const comersObj = Object(modTrabajo);
            const comercioTrab = comersObj as Comercios;
            //console.log(comercioTrab);
            
          })
        })
      })
    }

    async ngOnInit() {
      this.storage.get('datos').then(async (val)=>[
        this.serviceChofer.getById(val[2]).subscribe(async user =>{
          const choferObj= Object(user);
          this.usuario = choferObj['nombre'];
          //console.log(this.usuario);
          this.moduloTrabajo.getChoferTrabajo(val[2]).subscribe(modTrabajo => {
            const comersObj = Object(modTrabajo);
            const comercioTrab = comersObj as Comercios;
            
            //console.log(comercioTrab);
            
          })
        })
      ])
      this.init();
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

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.storage.get('datos').then(async (val)=>{
        this.serviceChofer.getById(val[2]).subscribe(async user =>{
          const choferObj= Object(user);
          this.usuario = choferObj['nombre'];
        })
      });
      event.target.complete();
    }, 200);
  }
 
  
  

  conexion(){
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.presentAlertDisconnect();
    });
    // stop disconnect watch
    //disconnectSubscription.unsubscribe();
    // watch network for a connection
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.presentAlertConnect();
    });
    // stop connect watch
    //connectSubscription.unsubscribe();
  }

  
  async presentAlertConnect() {
    const alert = await this.alertController.create({
      cssClass: 'animate__bounceInLeft',
      header: 'Red',
      message: 'Se reanudó la conexión a Internet',
      animated: true,
      buttons: ['Aceptar']
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  async presentAlertDisconnect() {
    const alert = await this.alertController.create({
      cssClass: 'animate__bounceInLeft',
      header: 'Red',
      message: 'Se interrumpió la conexión a Internet',
      animated: true,
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}
