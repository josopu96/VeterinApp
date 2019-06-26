import { Component, OnInit } from '@angular/core';
import { DataManagement } from '../../services/dataManagement';
import { GlobalService } from '../../services/globalService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {

  tema = "_oscuro";
  showAlert = false;

  constructor(
    private dm: DataManagement,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
  }

  nuevoTratamiento() {
    this.showAlert = true;
    if (this.globalService.mascota && this.globalService.mascota._id != "0") {
        this.showAlert = false;
    }

    if (this.showAlert) {
      this.globalService.generaVentana(300, 552, '/avisoNuevoTratamiento', 'nuevo-tratamiento');
    } else {
      this.router.navigate(['formTratamiento']);
    }
  }

  nuevaVacuna() {
    this.showAlert = true;
    if (this.globalService.mascota && this.globalService.mascota._id != "0") {
        this.showAlert = false;
    }

    if (this.showAlert) {
      this.globalService.generaVentana(300, 552, '/avisoNuevaVacuna', 'nueva-vacuna');
    } else {
      this.router.navigate(['formVacuna']);
    }
  }

  nuevaDesparasitacion() {
    this.showAlert = true;
    if (this.globalService.mascota && this.globalService.mascota._id != "0") {
        this.showAlert = false;
    }

    if (this.showAlert) {
      this.globalService.generaVentana(300, 552, '/avisoNuevaDesparasitacion', 'nueva-desparasitacion');
    } else {
      this.router.navigate(['formDesparasitacion']);
    }
  }

  nuevaAnalitica() {
    this.showAlert = true;
    if (this.globalService.mascota && this.globalService.mascota._id != "0") {
        this.showAlert = false;
    }

    if (this.showAlert) {
      this.globalService.generaVentana(300, 552, '/avisoNuevaAnalitica', 'nueva-analitica');
    } else {
      this.router.navigate(['formAnalitica']);
    }
  }
}
