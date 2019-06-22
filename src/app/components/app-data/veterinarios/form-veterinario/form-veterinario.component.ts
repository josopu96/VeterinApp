import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../../../../app.dataModels';
import { GlobalService } from '../../../../services/globalService';
import { DataManagement } from '../../../../services/dataManagement';
import { Router, ActivatedRoute } from '@angular/router';
import { ErroresFormVeterinario } from '../../../../models/errores';

@Component({
  selector: 'app-form-veterinario',
  templateUrl: './form-veterinario.component.html',
  styleUrls: ['./form-veterinario.component.scss']
})
export class FormVeterinarioComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  veterinarioEditado: Veterinario = new Veterinario;
  errores: ErroresFormVeterinario = new ErroresFormVeterinario();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.inicializaErrores();
    if ((<HTMLInputElement>document.getElementById('dt'))) {
      (<HTMLInputElement>document.getElementById('dt')).max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    }
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params && params["id"]) {
        this.new = false;
        this.veterinarioEditado._id = params["id"];
        this.veterinarioEditado.nombre = params["nombre"];
        this.veterinarioEditado.apellidos = params["apellidos"];
        this.veterinarioEditado.dni = params["dni"];
        this.veterinarioEditado.numColegiado = params["numColegiado"];
        this.veterinarioEditado.fecNac = params["fecNac"] !== 'null' ? params["fecNac"] : null;
        this.veterinarioEditado.telefono = params["telefono"] != 'null' ? params["telefono"] : "";
        this.ready = true;
      } else {
        this.new = true;
      }
    });
  }

  inicializaErrores() {
    this.errores.nombre = '';
    this.errores.apellidos = '';
    this.errores.dni = '';
    this.errores.fecNac = '';
    this.errores.numColegiado = '';
    this.errores.telefono = '';
  }

  guardar() {
    if (this.compruebaFallos()) {
      if (this.veterinarioEditado._id) {
        this.actualizar();
      } else {
        this.crear();
      }
    }
  }

  actualizar() {
    this.dm.updateVeterinario(this.veterinarioEditado).then((res) => {
      let index = this.globalService.veterinarios.indexOf(
        this.globalService.veterinarios.find(x => x._id === this.veterinarioEditado._id)
      );
      this.globalService.veterinarios[index] = this.veterinarioEditado;
      this.router.navigateByUrl('/veterinarios');
    }).catch((err) => {
      console.log(err);
    });
  }

  crear() {
    this.dm.createVeterinario(this.veterinarioEditado).then((res) => {
      this.globalService.veterinarios.push(this.veterinarioEditado);
      this.router.navigateByUrl('/veterinarios');
    }).catch((err) => {
      console.log(err);
    });
  }

  checkFormIsFullfilled() {
    let disabled = true;

    if (this.veterinarioEditado.nombre && this.veterinarioEditado.apellidos && this.veterinarioEditado.dni && this.veterinarioEditado.numColegiado) {
      disabled = false;
    }

    return disabled;
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

  cambia(key) {
    switch (key) {
      case 'nombre':
        if (this.errores.nombre != '') {
          if (this.veterinarioEditado.nombre) {
            this.errores.nombre = '';
          }
        }
        break;

      case 'numColegiado':
        if (this.errores.numColegiado != '') {
          if (this.veterinarioEditado.numColegiado) {
            this.errores.numColegiado = '';
          }
        }
        break;

      case 'fecNac':
        if (this.errores.fecNac != '') {
          if (this.veterinarioEditado.fecNac) {
            this.errores.fecNac = '';
          }
        }
        break;

      case 'telefono':
        if (this.errores.telefono != '') {
          if (this.veterinarioEditado.telefono) {
            this.errores.telefono = '';
          }
        }
        break;

      case 'dni':
        if (this.errores.dni != '') {
          if (this.veterinarioEditado.dni) {
            this.errores.dni = '';
          }
        }
        break;

      case 'apellidos':
        if (this.errores.apellidos != '') {
          if (this.veterinarioEditado.apellidos) {
            this.errores.apellidos = '';
          }
        }
        break;

      default:
        break;
    }
  }

  compruebaFallos() {
    let res = true;
    if (!this.veterinarioEditado.nombre) {
      this.errores.nombre = "obligatorio";
      res = false;
    }
    if (!this.veterinarioEditado.numColegiado) {
      this.errores.numColegiado = "obligatorio";
      res = false;
    }
    if (!this.veterinarioEditado.dni) {
      this.errores.dni = "obligatorio";
      res = false;
    }
    if (!this.veterinarioEditado.apellidos) {
      this.errores.apellidos = "obligatorio";
      res = false;
    }
    if (this.compruebaFechaFuturo(this.veterinarioEditado.fecNac)) {
      this.errores.fecNac = "fechaFuturo";
      res = false;
    }
    return res;
  }

  compruebaFechaFuturo(fecha) {
    let res: boolean = false;
    let now: Date = new Date();
    if (fecha) {
      if (new Date(fecha) > now) {
        res = true;
      }
    }
    return res;
  }


}
