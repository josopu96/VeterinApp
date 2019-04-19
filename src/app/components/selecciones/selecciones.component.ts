import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { Cliente, Mascota, Veterinario } from '../../app.dataModels';
import { DataManagement } from '../../services/dataManagement';

@Component({
  selector: 'app-selecciones',
  templateUrl: './selecciones.component.html',
  styleUrls: ['./selecciones.component.scss']
})
export class SeleccionesComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dm: DataManagement
  ) { }

  
  cliente: Cliente;
  veterinario: Veterinario;
  mascota: Mascota;

  ngOnInit() {
    this.getCliente();
    this.getMascota();
    this.getVeterinario();
  }

  getCliente(): void {
    const id = +this.route.snapshot.paramMap.get('idCliente');
    if(id){
      this.dm.getCliente(id)
        .then(cliente => {
          this.cliente = cliente
          console.log(this.cliente);
        }).catch((err) => {
          this.cliente = null;
          console.error(err);
        });
    } else {
      this.cliente = new Cliente();
      this.cliente._id = "0";
    }
  }
  getMascota(): void {
    const id = +this.route.snapshot.paramMap.get('idMascota');
    if(id){
      //TODO
    } else {
      this.mascota = new Mascota();
      this.mascota._id = "0";
    }
  }
  getVeterinario(): void {
    const id = +this.route.snapshot.paramMap.get('idVeterinario');
    if(id){
      //TODO
    } else {
      this.veterinario = new Veterinario();
      this.veterinario._id = "0";
    }
  }

  goBack(): void {
    this.location.back();
  }
}
