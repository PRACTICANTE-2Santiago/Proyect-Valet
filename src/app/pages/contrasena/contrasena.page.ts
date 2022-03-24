/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { PinService, Pin } from '../services/pin.service';
import { AuthService } from '../services/auth.service';
import { UsuarioChoferService } from '../services/usuario-chofer.service';
import { ModuloValetService } from '../services/modulo-valet.service';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {
 // usu: Usuarios[];
  usu: any;

  correo: any;
  nip: any;
  pass: any;
  bdName: any;
  bdUser: any;
  bdPdw: any;
  idResi: any;
  idUsu: any;
  flagPass= false;
  passwordShow = false;
  passworType = 'password';
  passworToggleIcon = 'eye-off';
  emailFb1: string;

  myForm= new FormGroup({
    correo: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
    nip: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2)
    ]),
    pass: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8)
    ])
  });

  constructor(
    private modalCtrl: ModalController,
    private servicepin: PinService,
    private router: Router,
    private aFire: AuthService,
    public alertController: AlertController,
    private service: UsuarioChoferService,
    private authService:AuthService,
    private valetService: ModuloValetService,
    private pinService: PinService,
  ) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss(null,'closed');
  }

   onSubmit(){
    if ( this.myForm.value.nip !== '01' ) {
      //console.log(this.myForm.value);
      
      this.presentAlert('Datos Inválidos');
      return;
    }
    this.pinService.pin(this.myForm.value.nip).subscribe((responses)=>{
      if(responses){
            console.log("pin"+responses);
      
            const objValet = (responses);
            const id = objValet['id'];
            const pin = objValet['id_pin'];
            const nombre_valet = objValet['nombre'];
            this.service.login(this.myForm.value.usuario,this.myForm.value.contrasenia,id).subscribe((responseU)=>{
              if(responseU){
                
                console.log("usuario"+responseU);
                    const obj = (responseU);
                    const correo = obj['correo_electronico'];
                    const id_chofer = obj['id'];
                    const tipo = obj['id_pin'];

                      // eslint-disable-next-line @typescript-eslint/naming-convention
                      this.usu={id:'1',usuario:'1',contrasenia:'1',id_residencial:'1',id_usuario:'1'};

                      this.service.updateContra(this.usu,id_chofer,this.myForm.value.pass).subscribe((responseCon)=>{
                        if(responseCon){
                          const objRes = (responseCon);
                          const esta = objRes['status'];
                          if(esta === 'success'){
                            this.aFire.register(this.myForm.value.correo, 'DemoPA123').then(res => {
                              this.aFire.updatePass(this.myForm.value.correo);
                              this.modalCtrl.dismiss(null,'closed');
                              this.router.navigate(['/contrasena-info']);
                            }).catch(err => {
                              this.aFire.updatePass(this.myForm.value.correo);
                              this.modalCtrl.dismiss(null,'closed');
                              this.router.navigate(['/contrasena-info']);
                            });
                          }else{
                            this.presentAlert('Datos Inválidos1');
                          }
                        }else{
                          this.presentAlert('Datos Inválidos2');
                          //console.log('No existe el usuario');
                        }
                      });
                 }else{
                this.presentAlert('Datos Inválidos3');
                //console.log('No existe el usuario');
              }
            });
          }else{
            this.presentAlert('Datos Inválidos4');
             //console.log('Conexión Invalida');
          }
        });
      }

  public togglePassword() {
    if(this.passwordShow){
      this.passwordShow = false;
      this.passworType = 'password';
      this.passworToggleIcon = 'eye-off';
    }else{
      this.passwordShow = true;
      this.passworType = 'text';
      this.passworToggleIcon = 'eye';

    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro de usuario',
      subHeader: 'Estado de registro',
      message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
