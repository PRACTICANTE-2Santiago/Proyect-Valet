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

  login(usuario: string, contrasenia: string, id: string){
    return this.http.get<[Chofer]>(this.url+'?usuario='+usuario+'&contrasenia='+contrasenia+'&id_valet='+id);
   
  }

  updateToken(id: string, token: string){
    return this.http.put(this.url+'?id='+id+'&token='+token,0);
  }

  updateContra(usuario: Chofer, id: string, contrasenia: string){
    return this.http.put(this.url+'?id='+id+'&contrasenia='+contrasenia,usuario);
  }
  getById(id_chofer: string){
    return this.http.get<[Chofer]>(this.url+'?id='+id_chofer)
  }
}
