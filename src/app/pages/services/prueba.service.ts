import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../../../environments/environment'

export interface Valet {
 id: string;
 id_creditos: string;
 id_pin: string;
 nombre: string;
 telefono: string;
 correo_electronico: string;
 representante: string;
 estatus: string;

}

@Injectable({
  providedIn: 'root'
})


export class PruebaService {

  private url = environment.server + 'valet.php';

  constructor(private http: HttpClient){}

  getAll(){
    return this.http.get<[Valet]>(this.url);
  }
  get(id: string){
    return this.http.get<[Valet]>(this.url + '/' + id);
  }
  create(valet: Valet){
    return this.http.post(this.url, valet);
  }
  update(valet: Valet, id: string){
    return this.http.put(this.url + '/' + id, valet);
  }
  remove(id: string){
    return this.http.delete(this.url + '/' + id);
  }

    
}
