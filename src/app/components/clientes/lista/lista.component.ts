import { Component, OnInit } from '@angular/core';
import { DataManagement } from '../../../services/dataManagement';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { element } from '@angular/core/src/render3';
import { GlobalService } from '../../../services/globalService';
import { Cliente } from '../../../models/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  headElements = ['Nombre', 'Apellidos', 'DNI', 'Teléfono', 'Visualizar', 'Editar', 'Seleccionar'];

  elements: any[];


  constructor(
    private dm: DataManagement,
    private globalService: GlobalService,
    private router: Router
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

  onSelect(cliente: Cliente):void{
    this.globalService.setCliente(cliente);
    this.router.navigateByUrl('/seleccionaCliente', {skipLocationChange: true}).then(()=>
    this.router.navigate(["clientes"])); 
  }
}
