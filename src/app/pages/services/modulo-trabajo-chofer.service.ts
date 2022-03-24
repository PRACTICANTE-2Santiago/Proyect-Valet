import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface TrabajoChofer {
  id?: string;
  id_chofer?: string;
  id_comercios?: string;
  fecha_registrp?: string;
  estatus?: string;
  nombre?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModuloTrabajoChoferService {

  private url = environment.server + 'choferlugares.php';

  constructor(private http: HttpClient) { }

  getChoferTrabajo(id_chofer: string){
    return this.http.get<[TrabajoChofer]>(this.url+'?id_chofer='+id_chofer);
  }
 
}
