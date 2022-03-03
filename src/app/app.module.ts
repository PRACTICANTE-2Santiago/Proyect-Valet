import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Storage } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { ModalTicketPage } from './pages/modal-ticket/modal-ticket.page';

@NgModule({
  declarations: [AppComponent, ModalTicketPage],
  entryComponents: [ModalTicketPage],
  imports: [BrowserModule, 
            IonicModule.forRoot(),
            IonicStorageModule.forRoot(),
            AppRoutingModule,
            HttpClientModule,
            FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              Storage],
  bootstrap: [AppComponent],
})
export class AppModule {}
