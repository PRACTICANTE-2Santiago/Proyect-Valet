import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


export interface Pin {
  id?: string;
  id_pin?: string;
  nombre?: string;
  representante?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PinService {

  private url=environment.server + 'valet.php';

  constructor(private http: HttpClient) { }

  pin(id_pin: string){
    return this.http.get<[Pin]>(this.url+'?id_pin='+id_pin);
  }
  getAll(){
    return this.http.get<[Pin]>(this.url);
  }
  
}
