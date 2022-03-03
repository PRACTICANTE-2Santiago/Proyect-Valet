import { Component, OnInit } from '@angular/core';
import { ModuloEntregadoService, Entregados } from '../services/modulo-entregado.service';

@Component({
  selector: 'app-entregados',
  templateUrl: './entregados.page.html',
  styleUrls: ['./entregados.page.scss'],
})

export class EntregadosPage implements OnInit {

  entregado: Entregados[];

  constructor( private service: ModuloEntregadoService ) { }

  ngOnInit() {
    this.service.getAll().subscribe(response=>{
      this.entregado = response;
    });
  }

}
