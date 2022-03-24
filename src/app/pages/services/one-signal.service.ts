import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { oneSignalApi } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';



@Injectable({
  providedIn: 'root'
})

export class OneSignalService {

  notificaciones: OSNotificationPayload[] = [];

  choferId: string;

  pushListener = new EventEmitter<OSNotificationPayload>();
  constructor(private oneSignal: OneSignal,
              private storage: Storage) {
    this.storage.create();
    this.cargarNotificaciones();
  }

  async getNotificaciones(){
    await this.cargarNotificaciones();
    return [...this.notificaciones];
  }

  inicializarConfiguracion(){
    this.oneSignal.startInit(oneSignalApi.apiKey, environment.firebase.messagingSenderId);

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe(( notificacion ) => {
      //console.log('Notificación: ', notificacion);
      this.notificacionRecibida( notificacion );
    });

    this.oneSignal.handleNotificationOpened().subscribe( async ( notificacion ) => {
      //console.log('Notificación: ', notificacion);
      await this.notificacionRecibida( notificacion.notification );
    });

    //Obtener id del suscriptor
    this.oneSignal.getIds().then( info => {
      this.choferId = info.userId;
    });

    this.oneSignal.endInit();
  }

  async notificacionRecibida( notificacion: OSNotification ){
    await this.cargarNotificaciones();

    const payload = notificacion.payload;
    const existe = this.notificaciones.find( mensaje => mensaje.notificationID === payload.notificationID);
    if( existe ){
      return;
    }

    this.notificaciones.unshift(payload);
    this.pushListener.emit( payload );
    await this.guardarNotificaciones();
  }

  guardarNotificaciones(){
    this.storage.set('notificaciones', this.notificaciones);
  }

  async cargarNotificaciones(){
    this.notificaciones = await this.storage.get('notificaciones') || [];
    return this.notificaciones;
  }
  
}
