import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Storage } from '@ionic/storage-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx'
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalTicketPage } from './pages/modal-ticket/modal-ticket.page';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
import { ModalEstacionadoPage } from './pages/modal-estacionado/modal-estacionado.page';
import { ModalSolicitudPage } from './pages/modal-solicitud/modal-solicitud.page';
import { ModalUbicacionPage } from './pages/modal-ubicacion/modal-ubicacion.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Network } from '@ionic-native/network/ngx'
import { CommonModule } from '@angular/common';
import { ContrasenaPage } from './pages/contrasena/contrasena.page';

@NgModule({
  declarations: [AppComponent, 
    ModalTicketPage,
    ModalEstacionadoPage, 
    ModalSolicitudPage, 
    ModalUbicacionPage,
  ContrasenaPage],
  entryComponents: [ModalTicketPage,
    ModalEstacionadoPage,
    ModalSolicitudPage,
    ModalUbicacionPage,ContrasenaPage],
  imports: [BrowserModule,
            CommonModule,
            AppRoutingModule,
            AngularFireAuthModule,
            AngularFireModule.initializeApp(environment.firebase),
            IonicModule.forRoot(),
            IonicStorageModule.forRoot(),
            
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AndroidPermissions, Storage, Network, OneSignal, StatusBar, Vibration, FileTransfer, FileOpener, EmailComposer, FileChooser ],
  
  bootstrap: [AppComponent,],
})
export class AppModule {}
