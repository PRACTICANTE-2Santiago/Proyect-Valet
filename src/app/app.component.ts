import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Platform } from '@ionic/angular';
import { OneSignalService } from './pages/services/one-signal.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(   
    private storage: Storage,
    private platform: Platform,
    private oneSignalService: OneSignalService
       ){  
     
        this.database();
        this.platform.ready().then(() => {
        this.oneSignalService.inicializarConfiguracion();
  
      });
    }

  ngOnInit(){
   
  }

  async database() {
    await this.storage.create();
  }

}
