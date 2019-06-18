import { Component, OnInit } from '@angular/core';
import { CabeceraTabla } from '../../../../models/tablas';
import { Tratamiento } from '../../../../app.dataModels';
import { GlobalService } from '../../../../services/globalService';
import { Router } from '@angular/router';
import { DataManagement } from '../../../../services/dataManagement';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  headElements: CabeceraTabla[] = [];

  elements: Tratamiento[] = [];
  tema = "_oscuro";

  constructor(
    private globalService: GlobalService,
    private dm: DataManagement,
    private router: Router,
  ) { }

  ngOnInit() {
    this.inicializaCabecera();
    this.tema = "_" + this.globalService.getTema();

    if (this.globalService.mascota) {
      this.dm.getTratamientoByMascotaId(this.globalService.mascota._id).then((res) => {
        this.elements = res;
      });
    }
  }

  inicializaCabecera() {
    let entrada1: CabeceraTabla = new CabeceraTabla();
    let entrada2: CabeceraTabla = new CabeceraTabla();
    let entrada3: CabeceraTabla = new CabeceraTabla();
    entrada1.nombre = 'Fecha';
    entrada1.clase = 'cabecerFecha';
    this.headElements.push(entrada1);
    entrada2.nombre = 'TipoTratamiento';
    entrada2.clase = 'cabeceraTipoTratamiento';
    this.headElements.push(entrada2);
    entrada3.nombre = 'Diagnostico';
    entrada3.clase = 'cabeceraDiagnostico';
    this.headElements.push(entrada3);

  }

  editar(tratamiento: Tratamiento) {

  }

}
