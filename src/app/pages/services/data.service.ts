import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getMenuOptions(){
    return this.http.get<Menu[]>('/assets/data/menu-options.json');
  }
}
