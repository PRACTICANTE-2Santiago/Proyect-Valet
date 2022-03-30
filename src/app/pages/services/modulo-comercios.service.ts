import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Comercios {
  id?: string;
  id_valet?: string;
  nombre?: string;
  calle?: string;
  codigo_postal?: string;
  telefono?: string;
  correo_electronico?: string;
  logotipo?: string;
  representante?: string;
  tarifa?: string;
  estatus?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModuloComerciosService {


  private url = environment.server  + 'comercios.php';

  constructor(private http: HttpClient) { }

  getAllComercios(){
    return this.http.get<[Comercios]>(this.url);
  }
  getByIDComers( id: string){
    return this.http.get<[Comercios]>(this.url+'?id='+id);
  }
  getByIDComercios( id_valet: string){
    return this.http.get<[Comercios]>(this.url+'?id_valet='+id_valet);
  }
  

  
}
