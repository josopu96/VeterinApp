import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { Cliente, Mascota, Veterinario } from '../../app.dataModels';
import { ClienteService }  from '../../services/cliente/cliente.service';
import { MascotaService }  from '../../services/mascota/mascota.service';
import { VeterinarioService }  from '../../services/veterinario/veterinario.service';

@Component({
  selector: 'app-selecciones',
  templateUrl: './selecciones.component.html',
  styleUrls: ['./selecciones.component.scss']
})
export class SeleccionesComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private veterinarioService: VeterinarioService,
    private clienteService: ClienteService,
    private location: Location
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
      this.clienteService.getCliente(id)
        .subscribe(cliente => this.cliente = cliente);
    } else {
      this.clienteService.getCliente(0)
        .subscribe(cliente => this.cliente = cliente);
    }
  }
  getMascota(): void {
    const id = +this.route.snapshot.paramMap.get('idMascota');
    if(id){
      this.mascotaService.getMascota(id)
        .subscribe(mascota => this.mascota = mascota);
    } else {
      this.mascotaService.getMascota(0)
        .subscribe(mascota => this.mascota = mascota);
    }
  }
  getVeterinario(): void {
    const id = +this.route.snapshot.paramMap.get('idVeterinario');
    if(id){
      this.veterinarioService.getVeterinario(id)
        .subscribe(veterinario => this.veterinario = veterinario);
    } else {
      this.veterinarioService.getVeterinario(0)
        .subscribe(veterinario => this.veterinario = veterinario);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
