import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import {Cliente, Mascota, Veterinario } from '../../app.dataModels';
import { DataManagement } from '../../services/dataManagement';
import { GlobalService } from '../../services/globalService';

@Component({
  selector: 'app-selecciones',
  templateUrl: './selecciones.component.html',
  styleUrls: ['./selecciones.component.scss']
})
export class SeleccionesComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dm: DataManagement,
    private globalService: GlobalService
  ) { }

  cliente: Cliente;
  veterinario: Veterinario;
  mascota: Mascota;
  tema: string = "_claro";

  ngOnInit() {
    this.getCliente();
    this.getMascota();
    this.getVeterinario();
    this.tema = "_"+this.globalService.getTema();
  }

  getCliente(): void {
    const id = this.route.snapshot.paramMap.get('idCliente');
    console.log("Cliente: "+id);
    if(id){
      this.dm.getCliente(id)
        .then(cliente => {
          this.cliente = cliente;
          this.globalService.setCliente(this.cliente);
          console.log(this.cliente);
        }).catch((err) => {
          console.error(err);
          this.cliente = new Cliente();
          this.cliente.setId("0");
        });
    } else {
      this.cliente = this.globalService.getCliente();
    }
  }
  getMascota(): void {
    const id = +this.route.snapshot.paramMap.get('idMascota');
    console.log("Mascota: "+id);
    if(id){
      //TODO
    } else {
      this.mascota = new Mascota();
      this.mascota.setId("0");
    }
  }
  getVeterinario(): void {
    const id = +this.route.snapshot.paramMap.get('idVeterinario');
    if(id){
      //TODO
    } else {
      this.veterinario = new Veterinario();
      this.veterinario.setId("0");
    }
  }

  goBack(): void {
    this.location.back();
  }
}
