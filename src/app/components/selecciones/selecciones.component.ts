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
  tema: string = "_oscuro";

  ngOnInit() {
    this.getCliente();
    this.getMascota();
    this.getVeterinario();
    this.tema = "_"+this.globalService.getTema();
  }

  getCliente(): void {
      this.cliente = this.globalService.getCliente();
  }
  getMascota(): void {
    this.mascota = this.globalService.getMascota();
  }
  getVeterinario(): void {
    this.veterinario = this.globalService.getVeterinario();
  }

  goBack(): void {
    this.location.back();
  }
}
