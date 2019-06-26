import { Component, OnInit } from '@angular/core';
import { Analitica } from '../../../../app.dataModels';
import { ErroresFormAnaliticas } from '../../../../models/errores';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../services/globalService';
import { DataManagement } from '../../../../services/dataManagement';

@Component({
  selector: 'app-form-analitica',
  templateUrl: './form-analitica.component.html',
  styleUrls: ['./form-analitica.component.scss']
})
export class FormAnaliticaComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  analiticaEditada: Analitica = new Analitica;
  errores: ErroresFormAnaliticas = new ErroresFormAnaliticas();

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
        this.analiticaEditada._id = params["id"];
        this.analiticaEditada.nombre = params["nombre"];
        this.analiticaEditada.descripcion = params["descripcion"];
        this.analiticaEditada.resultado = params["resultado"];
        this.analiticaEditada.fecha = params["fecha"];
        this.ready = true;
      } else {
        this.new = true;
        this.analiticaEditada.fecha = new Date();
        this.ready = true;
      }
    });
  }

  guardar() {
    if (this.compruebaFallos()) {
      if (this.analiticaEditada._id) {
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
    this.dm.createAnalitica(this.analiticaEditada, this.globalService.mascota._id).then((res) => {
      this.globalService.mascota.analiticas.push(this.analiticaEditada);
      this.router.navigateByUrl('/mascota/'+this.globalService.mascota._id);
    }).catch((err) => {
      console.log(err);
    });
  }

  cambia(key) {
    switch (key) {
      case 'nombre':
        this.errores.nombre = '';
        break;

      case 'descripcion':
        this.errores.descripcion = '';
        break;

      case 'resultado':
        this.errores.resultado = '';
        break;

      case 'fecha':
        this.errores.fecha = '';
        break;

      default:
        break;
    }
  }

  compruebaFallos() {
    let res = true;
    if (!this.analiticaEditada.nombre) {
      this.errores.nombre = "obligatorio";
      res = false;
    }
    if (!this.analiticaEditada.descripcion) {
      this.errores.descripcion = "obligatorio";
      res = false;
    }
    if (!this.analiticaEditada.resultado) {
      this.errores.resultado = "obligatorio";
      res = false;
    }
    if (!this.analiticaEditada.fecha) {
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
