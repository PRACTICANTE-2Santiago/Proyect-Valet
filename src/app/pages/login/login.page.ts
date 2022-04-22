import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { AlertController, IonInput, ModalController } from '@ionic/angular';
import { Storage} from '@ionic/storage-angular';
import { UsuarioChoferService } from '../services/usuario-chofer.service';
import { ModuloValetService } from '../services/modulo-valet.service';
import { OneSignalService } from '../services/one-signal.service';
import { AuthService } from '../services/auth.service';
import { PinService } from '../services/pin.service';
import { ContrasenaPage } from '../contrasena/contrasena.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  @ViewChildren(IonInput) input: IonInput[];
  iconpassword = 'eye-off-outline';
  isActiveToogle: Boolean = true;
  emailFb1: string;

  myForm = new FormGroup({
    nip: new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
    usuario: new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ]),
    contrasenia: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
    
  });

  constructor( private service: UsuarioChoferService,
               private authService:AuthService,
               private valetService: ModuloValetService,
               private pinService: PinService,
               private storage: Storage,
               private router: Router,
               private oneSignalService: OneSignalService,
               private alertController: AlertController,
               private modalCtrl: ModalController,
               ) { }

  ngOnInit() {
    this.storage.create();
    this.authService.getUserAuth().subscribe(response=>{
      if(response !== null){
        console.log(response);
        
        this.storage.get('datos').then(async (val) => {
          if (val !== null) {
            this.emailFb1=val[8];
            if(this.emailFb1 === response['email']){
              this.input.forEach(element => {
                element.value = '';
              });
              this.router.navigate(['/home']);
              console.log(response);
            }else{
              this.router.navigate(['/login'])
            }
          }
        })
      }
    })
  }


  onSubmit(){
    if ( this.myForm.value.nip !== '01' ) {
      //console.log(this.myForm.value);
      
      this.presentAlert('Datos Inválidos');
      return;
    }
    this.pinService.pin(this.myForm.value.nip).subscribe((responses)=>{
      if(responses){
         //   console.log("pin"+responses);
      
            const objValet = (responses);
            const id = objValet['id'];
            const pin = objValet['id_pin'];
            const nombre_valet = objValet['nombre'];
            this.service.login(this.myForm.value.usuario,this.myForm.value.contrasenia,id ).subscribe((responseU)=>{
              if(responseU){
                
                //console.log("usuario"+ responseU);
                    const obj = (responseU);
                    const correo = obj['correo_electronico'];
                    const id_chofer = obj['id'];
                    const tipo = obj['id_pin'];

                    let cadena;
                    const token = obj['token'];
                    //console.log(token);
                    
                   // console.log(this.oneSignalService.choferId);

                    console.log("onesignal"+this.oneSignalService.choferId);
                    cadena = [this.myForm.value.pin,nombre_valet,id_chofer];
                    
                    
                    if( token === '') {
                     
                      this.service.updateToken(id_chofer, this.oneSignalService.choferId).subscribe(response => {
                        console.log(response);
                      });
                    } else if( token !== this.oneSignalService.choferId) {
                      
                      this.service.updateToken(id,this.oneSignalService.choferId).subscribe( response => {
                        console.log(response);
                      });
                    }

                   
                   this.storage.set('datos' , cadena);

                    //METODO FIREBASE

                  this.authService.register(correo, this.myForm.value.contrasenia).then(res => {

                    this.authService.login(correo,this.myForm.value.contrasenia).then(ress=>{
                      this.input.forEach(element => {
                        element.value = '';
                      });
                      this.router.navigate(['/home']);
                    }).catch(err =>this.presentAlert('Datos Inválidos ' + err));
                  }).catch(err =>{
                    console.log('Usuario ya creado: ' + this.myForm.value.contrasenia);
                    //console.log(err);
                    this.authService.login(correo,this.myForm.value.contrasenia).then(resLogue=>{
                      this.input.forEach(element => {
                        element.value = '';
                      });
                      this.router.navigate(['/home']);
                    }).catch(() => this.presentAlert('Datos Inválidos error 1 '));
                  });
              }else{
                this.presentAlert('Datos Inválidos error 2');
                //console.log('No existe el usuario');
              }
            });
          }else{
            this.presentAlert('Datos Inválidos error 3');
             //console.log('Conexión Invalida');
          }
        });
      
  }

  public togglePassword(){
    this.isActiveToogle = (this.isActiveToogle==true)?false:true;

    this.iconpassword = this.iconpassword === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }
  
  getType(){
    return this.isActiveToogle ? 'password': 'text;'
  }


  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Estado de autenticación',
      subHeader: 'Inicio de sesión',
      message,
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ver(){
    this.modalCtrl
    .create({
      component: ContrasenaPage,
    })
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data, role})=>{

    });
  }
}
