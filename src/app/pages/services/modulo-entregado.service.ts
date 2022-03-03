import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Entregados {
  id?: string;
  id_valet?: string;
  placas?: string;
  descripcion?: string;
  foto1?:string;
  foto2?: string;
  foto3?: string;
  id_registro?: string;
  fecha_registro?: string;
  id_ubicacion?: string;
  latitud?: string;
  longitud?: string;
  comentarios?: string;
  fehca_ubicacion?: string;
  fecha_pedir?: string;
  id_entrega?: string;
  fecha_entregado?: string;
  comentarios_entregado?: string;
  fecha_notificado?: string;
  comentarios_cliente?: string;
  token?: string;
  condiciones?: string;
  estatus?: string;
}


@Injectable({
  providedIn: 'root'
})
export class ModuloEntregadoService {
  
  private url = environment.server + 'automovil.php';

  constructor( private http: HttpClient) { }

  getAll(){
    return this.http.get<[Entregados]>(this.url);
  }

  getById(id: string){
    return this.http.get<[Entregados]>(this.url + '/' + id);
  }

  
}
