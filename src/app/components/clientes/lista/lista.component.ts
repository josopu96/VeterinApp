import { Component, OnInit } from '@angular/core';
import { DataManagement } from '../../../services/dataManagement';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  headElements = ['Nombre', 'Apellidos', 'DNI', 'Teléfono', 'Visualizar', 'Editar', 'Seleccionar'];

  elements: any[];


  constructor(
    private dm: DataManagement
  ) {

  }

  ngOnInit() {
    this.getItems();
  }

  private getItems (filters?: any[]) {
    this.dm.getClients(filters).then((response) => {
      this.elements = response;
      console.log(this.elements);
    }).catch((err) => {
      console.log(err);
    });
  }
}
