import { Component, OnInit } from '@angular/core';
import { Tratamiento } from '../../../../app.dataModels';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../services/globalService';
import { DataManagement } from '../../../../services/dataManagement';
import { ErroresFormTratamientos } from '../../../../models/errores';

@Component({
  selector: 'app-form-tratamiento',
  templateUrl: './form-tratamiento.component.html',
  styleUrls: ['./form-tratamiento.component.scss']
})
export class FormTratamientoComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  tratamientoEditado: Tratamiento = new Tratamiento;
  errores: ErroresFormTratamientos = new ErroresFormTratamientos();

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
        this.tratamientoEditado._id = params["id"];
        this.tratamientoEditado.anamnesis = params["anamnesis"];
        this.tratamientoEditado.diagnostico = params["diagnostico"];
        this.tratamientoEditado.tipoTratamiento = params["tipoTratamiento"];
        this.tratamientoEditado.fecha = params["fecha"];
        this.ready = true;
      } else {
        this.new = true;
        this.tratamientoEditado.fecha = new Date();
        this.ready = true;
      }
    });
  }

  guardar() {
    if (this.compruebaFallos()) {
      if (this.tratamientoEditado._id) {
        this.actualizar();
      } else {
        this.crear();
      }
    }
  }

  checkFormIsFullfilled() {

  }

  actualizar() {
    this.dm.updateTratamiento(this.tratamientoEditado, this.globalService.mascota._id).then((res) => {
      this.router.navigateByUrl('/mascota'+this.globalService.mascota._id);
    }).catch((err) => {
      console.log(err);
    });
  }

  crear() {
    this.dm.createTratamiento(this.tratamientoEditado, this.globalService.mascota._id).then((res) => {
      this.globalService.mascota.tratamientos.push(this.tratamientoEditado);
      this.router.navigateByUrl('/mascota/'+this.globalService.mascota._id);
    }).catch((err) => {
      console.log(err);
    });
  }

  cambia(key) {
    switch (key) {
      case 'anamnesis':
        this.errores.anamnesis = '';
        break;

      case 'diagnostico':
        this.errores.diagnostico = '';
        break;

      case 'tipoTratamiento':
        this.errores.tipoTratamiento = '';
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
    if (!this.tratamientoEditado.anamnesis) {
      this.errores.anamnesis = "obligatorio";
      res = false;
    }
    if (!this.tratamientoEditado.diagnostico) {
      this.errores.diagnostico = "obligatorio";
      res = false;
    }
    if (!this.tratamientoEditado.tipoTratamiento) {
      this.errores.tipoTratamiento = "obligatorio";
      res = false;
    }
    if (!this.tratamientoEditado.fecha) {
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
