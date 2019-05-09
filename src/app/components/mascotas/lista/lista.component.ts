import { Component, OnInit } from '@angular/core';
import { DataManagement } from '../../../services/dataManagement';
import { GlobalService } from '../../../services/globalService';
import { Router } from '@angular/router';
import { Mascota } from '../../../models/mascota';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  headElements = ['Nombre', 'Fecha Nacimiento', 'Chip', 'Visualizar', 'Editar', 'Seleccionar'];

  elements: any[];
  tema = "_claro";


  constructor(
    private dm: DataManagement,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getItems();
    this.tema = "_" + this.globalService.getTema();
  }

  private getItems (filters?: any[]) {
    this.dm.getMascotas(filters).then((response) => {
      this.elements = response;
    }).catch((err) => {
      console.log(err);
    });
  }

  onSelect(mascota: Mascota): void {
    this.globalService.setMascota(mascota);
    this.router.navigateByUrl('/seleccionaMascota', {skipLocationChange: true}).then(() =>
    this.router.navigate(["mascotas"]));
  }
}
