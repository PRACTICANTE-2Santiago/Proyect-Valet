import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Chofer {
  id?: string;
  id_valet?: string;
  usuario?: string;
  contrasenia?: string;
  nombre?: string;
  apellido_paterno?: string;
  apellido_materno?: string;
  ine?: string;
  licencia?: string;
  telefono?: string;
  correo_electronico?: string;
  fecha_registro?: string;
  token?: string;
  estatus?: string;

}

@Injectable({
  providedIn: 'root'
})
export class UsuarioChoferService {

  private url = environment.server + 'choferes.php';

  constructor( private http : HttpClient) { }

  login(usuario: string, contrasenia: string, id_pin: string){
    return this.http.get<[Chofer]>(this.url+'?usuario='+usuario+'&contrasenia='+contrasenia+'&id_pin='+id_pin);
   
  }

  updateToken(id: string, token: string){
    return this.http.put(this.url+'?id='+id+'&token='+token,0);
  }
}