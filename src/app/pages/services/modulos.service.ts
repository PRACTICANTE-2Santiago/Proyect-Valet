import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


export interface Modulos {
  id?: string;
  recibir_auto?: string;
  por_estacionar?: string;
  solicitudes?: string;
  entregados?: string;
  historial?: string;
  
}
@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  private url = environment.server = 'modulos.php';
  constructor(private http: HttpClient) { }

  get(id: string){
    return this.http.get<[]>(this.url+'?id='+id);
  }
}
