import { Component, OnInit } from '@angular/core';
import { Desparasitacion } from '../../../../app.dataModels';
import { ErroresFormDesparasitaciones } from '../../../../models/errores';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../services/globalService';
import { DataManagement } from '../../../../services/dataManagement';

@Component({
  selector: 'app-form-desparasitacion',
  templateUrl: './form-desparasitacion.component.html',
  styleUrls: ['./form-desparasitacion.component.scss']
})
export class FormDesparasitacionComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  desparasitacionEditada: Desparasitacion = new Desparasitacion;
  errores: ErroresFormDesparasitaciones = new ErroresFormDesparasitaciones();

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
        this.desparasitacionEditada._id = params["id"];
        this.desparasitacionEditada.tipoDesparasitacion = params["tipoDesparasitacion"];
        this.desparasitacionEditada.fecha = params["fecha"];
        this.ready = true;
      } else {
        this.new = true;
        this.desparasitacionEditada.fecha = new Date();
        this.ready = true;
      }
    });
  }

  guardar() {
    if (this.compruebaFallos()) {
      if (this.desparasitacionEditada._id) {
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
    this.dm.createDesparasitacion(this.desparasitacionEditada, this.globalService.mascota._id).then((res) => {
      this.globalService.mascota.desparasitaciones.push(this.desparasitacionEditada);
      this.router.navigateByUrl('/desparasitaciones');
    }).catch((err) => {
      console.log(err);
    });
  }

  cambia(key) {
    switch (key) {
      case 'tipoDesparasitacion':
        if (this.errores.tipoDesparasitacion != '') {
          if (this.desparasitacionEditada.tipoDesparasitacion) {
            this.errores.tipoDesparasitacion = '';
          }
        }
        break;

      case 'telefono':
        if (this.errores.fecha != '') {
          if (this.desparasitacionEditada.fecha) {
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
    if (!this.desparasitacionEditada.tipoDesparasitacion) {
      this.errores.tipoDesparasitacion = "obligatorio";
      res = false;
    }
    if (!this.desparasitacionEditada.fecha) {
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
