import { Component, OnInit } from '@angular/core';
import { Vacuna } from '../../../../app.dataModels';
import { ErroresFormVacunas } from '../../../../models/errores';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../services/globalService';
import { DataManagement } from '../../../../services/dataManagement';

@Component({
  selector: 'app-form-vacuna',
  templateUrl: './form-vacuna.component.html',
  styleUrls: ['./form-vacuna.component.scss']
})
export class FormVacunaComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  vacunaEditada: Vacuna = new Vacuna;
  errores: ErroresFormVacunas = new ErroresFormVacunas();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params["id"]) {
        this.new = false;
        this.vacunaEditada._id = params["id"];
        this.vacunaEditada.tipoVacuna = params["tipoVacuna"];
        this.vacunaEditada.fecha = params["fecha"];
        this.ready = true;
      } else {
        this.new = true;
        this.vacunaEditada.fecha = new Date();
        this.ready = true;
      }
    });
  }

  guardar() {
    if (this.compruebaFallos()) {
      if (this.vacunaEditada._id) {
        this.actualizar();
      } else {
        this.crear();
      }
    }
  }

  checkFormIsFullfilled() {

  }

  actualizar() {
  }

  crear() {
    this.dm.createVacuna(this.vacunaEditada, this.globalService.mascota._id).then((res) => {
      this.globalService.mascota.vacunas.push(this.vacunaEditada);
      this.router.navigateByUrl('/vacunas');
    }).catch((err) => {
      console.log(err);
    });
  }

  cambia(key) {
    switch (key) {
      case 'tipoVacuna':
        if (this.errores.tipoVacuna != '') {
          if (this.vacunaEditada.tipoVacuna) {
            this.errores.tipoVacuna = '';
          }
        }
        break;

      case 'telefono':
        if (this.errores.fecha != '') {
          if (this.vacunaEditada.fecha) {
            this.errores.fecha = '';
          }
        }
        break;

      default:
        break;
    }
  }

  compruebaFallos() {
    let res = true;
    if (!this.vacunaEditada.tipoVacuna) {
      this.errores.tipoVacuna = "obligatorio";
      res = false;
    }
    if (!this.vacunaEditada.fecha) {
      this.errores.fecha = "obligatorio";
      res = false;
    }
    return res;
  }

  tooltip(e) {
    let tooltips: NodeListOf<HTMLElement> = document.querySelectorAll('.texto_error span');
    let x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
    if (tooltips) {
      for (let i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
      }
    }
  }

}
