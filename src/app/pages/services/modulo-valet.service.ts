import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Valet{
    id: string;
    id_contador: string;
    id_pin: string;
    nombre: string;
    representante: string;
    telefono: string;
    correo_electronico: string;
    estatus: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModuloValetService {

  private url = environment.server + 'valet.php';
  constructor(private http: HttpClient) { }

  get(id: string){
    return this.http.get<[Valet]>(this.url+'?id_pin='+id)
  }
}
