import { Component, OnInit } from '@angular/core';
import { DataManagement } from '../../../services/dataManagement';
import { GlobalService } from '../../../services/globalService';
import { Router, NavigationExtras } from '@angular/router';
import { Veterinario } from '../../../models/bundle';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  headElements = ['Nombre', 'Apellidos', 'Fecha Nacimiento', 'DNI', 'Teléfono', 'Num Colegiado', 'Editar', 'Borrar'];

  elements: any[];
  tema = "_claro";

  constructor(
    private dm: DataManagement,
    private globalService: GlobalService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getItems();
    this.tema = "_" + this.globalService.getTema();
  }

  private getItems (filters?: any[]) {
    this.dm.getVeterinarios(filters).then((response) => {
      this.elements = response;
    }).catch((err) => {
      console.log(err);
    });
  }

  onSelect(veterinario: Veterinario): void {

  }

  editar(veterinario: Veterinario) {
    let params = {
        'id': veterinario._id,
        'nombre': veterinario.nombre,
        'apellidos': veterinario.apellidos,
        'fecNac': veterinario.fecNac,
        'dni': veterinario.dni,
        'telefono': veterinario.telefono,
        'numColegiado': veterinario.numColegiado
      };
    this.router.navigate(['formVeterinario', params]);
  }

  borrar(id: string) {

  }
}
