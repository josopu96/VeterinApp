import { Component, OnInit } from '@angular/core';
import { DataManagement } from '../../../services/dataManagement';
import { GlobalService } from '../../../services/globalService';
import { Router } from '@angular/router';
import { Mascota } from '../../../app.dataModels';
import { FiltroMascota } from '../../../models/filtros';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  headElements = ['Nombre', 'Fecha Nacimiento', 'Chip', 'Visualizar', 'Editar', 'Seleccionar'];

  elements: Mascota[];
  tema = "_oscuro";

  mascotasTotales: Mascota[];

  time: Date = new Date();

  //Campos del formulario para filtrar
  filtroMascota: FiltroMascota;

  constructor(
    private dm: DataManagement,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filtroMascota = this.globalService.filtroMascota;
    this.elements = this.globalService.mascotas;
    this.tema = "_" + this.globalService.getTema();
    this.mascotasTotales = this.globalService.mascotas;
    this.aplicarFiltros();
  }

  onSelect(mascota: Mascota): void {
    this.globalService.setMascota(mascota);
    this.router.navigateByUrl('/seleccionaMascota', { skipLocationChange: true }).then(() =>
      this.router.navigate(["mascotas"]));
  }

  buscar() {
    this.aplicarFiltros();
  }

  private aplicarFiltros() {
    console.log(this.filtroMascota.edad);
    
    let timeDiff: number;
    let edad:number;

    this.elements = this.mascotasTotales.filter(mascota =>
      mascota.nombre.toLowerCase().includes(this.filtroMascota.nombre.toLowerCase()) &&
      mascota.chip.toLowerCase().includes(this.filtroMascota.chip.toLowerCase()) &&
      mascota.raza.toLowerCase().includes(this.filtroMascota.raza.toLowerCase()) &&
      mascota.pelo.toLowerCase().includes(this.filtroMascota.pelo.toLowerCase()) &&
      mascota.especie.toLowerCase().includes(this.filtroMascota.especie.toLowerCase()) &&
      this.filtroMascota.edad==null ? true : Math.floor((Math.abs(Date.now() - new Date(mascota.fecNac).getTime()) / (1000 * 3600 * 24))/365.25) == this.filtroMascota.edad &&
      mascota.sexo.toLowerCase().includes(this.filtroMascota.sexo.toLowerCase())
    
    );
    if (this.filtroMascota.porCliente) {
      //TODO
      if (this.filtroMascota.atendidas) {
        this.elements = this.elements.filter(mascota =>
          this.time.setHours(0, 0, 0, 0) <= new Date(mascota.fecModificacion).setHours(0, 0, 0, 0) &&
          new Date(mascota.fecModificacion).setHours(0, 0, 0, 0) <= this.time.setHours(0, 0, 0, 0)
        );
      }
    }
  }
}
