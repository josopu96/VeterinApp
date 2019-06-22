import { Component, OnInit } from '@angular/core';
import { Mascota, Cliente, Contacto } from '../../../app.dataModels';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../services/globalService';
import { DataManagement } from '../../../services/dataManagement';
import { ErroresFormMascota } from '../../../models/errores';

@Component({
  selector: 'app-form-mascotas',
  templateUrl: './form-mascotas.component.html',
  styleUrls: ['./form-mascotas.component.scss']
})
export class FormMascotasComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  mascotaEditada: Mascota = new Mascota();
  clienteSeleccionado: Cliente;
  sinCliente: Boolean = false;
  telefono: string = '';
  errores: ErroresFormMascota = new ErroresFormMascota();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.inicializaErrores();
    this.globalService.getMascotas();
    this.clienteSeleccionado = this.globalService.cliente;
    if ((<HTMLInputElement>document.getElementById('nac_dt'))) {
      (<HTMLInputElement>document.getElementById('nac_dt')).max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    }
    if ((<HTMLInputElement>document.getElementById('def_dt'))) {
      (<HTMLInputElement>document.getElementById('def_dt')).max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    }
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params && params['id']) {
        this.new = false;
        this.mascotaEditada._id = params["id"];
        this.mascotaEditada.nombre = params["nombre"];
        this.mascotaEditada.chip = params["chip"];
        this.mascotaEditada.fecNac = params["fecNac"];
        this.mascotaEditada.fecBaj = (params["fecBaj"] !== 'undefined') && (params["fecBaj"] !== 'null') ? params["fecBaj"] : null;
        this.mascotaEditada.sexo = params["sexo"];
        this.mascotaEditada.estado = params["estado"];
        this.mascotaEditada.pelo = params["pelo"];
        this.mascotaEditada.capa = params["capa"];
        this.mascotaEditada.especie = params["especie"];
        this.mascotaEditada.raza = params["raza"];
        this.mascotaEditada.idCliente = params["idCliente"];

        this.clienteSeleccionado = this.globalService.clientes.find(cliente => cliente._id == this.mascotaEditada.idCliente);
        if (!this.clienteSeleccionado) {
          this.clienteSeleccionado = this.globalService.clienteEspecial;
        }
      } else {
        this.new = true;
        this.mascotaEditada.idCliente = this.clienteSeleccionado._id;
      }
    });
    
    if (this.clienteSeleccionado._id != "0") {
      if (this.clienteSeleccionado._id == this.globalService.clienteEspecial._id) {
        this.sinCliente = true;
      } else {
        if (this.clienteSeleccionado.contactos) {
          if (this.clienteSeleccionado.contactos.length > 0) {
            this.telefono = this.clienteSeleccionado.contactos[0].telefono;
          }
        }
      }
    } else {
      //esta opción sólo se dará en desarrollo, cuando se reinicia el servidor en esta página.
      this.metodoDesarrollo();
    }
  }

  inicializaErrores() {
    this.errores.nombre = '';
    this.errores.chip = '';
    this.errores.fechaNac = '';
    this.errores.fechaFac = '';
    this.errores.sexo = '';
    this.errores.estado = '';
    this.errores.pelo = '';
    this.errores.capa = '';
    this.errores.especie = '';
    this.errores.raza = '';
  }

  metodoDesarrollo() {
    this.sinCliente = false;
    this.clienteSeleccionado = new Cliente();
    this.clienteSeleccionado._id = "0";
    this.clienteSeleccionado.nombre = "Dev";
    this.clienteSeleccionado.apellidos = "Dev";
    this.clienteSeleccionado.dni = "Dev";
    this.clienteSeleccionado.contactos = [];
    let contacto: Contacto = new Contacto();
    contacto.telefono = "tel_dev";
    this.clienteSeleccionado.contactos.push(contacto);
  }

  guardar() {
    if (this.compruebaFallos()) {
      if (this.mascotaEditada._id) {
        this.actualizar();
      } else {
        this.crear();
      }
    }
  }

  actualizar() {
    this.dm.updateMascota(this.mascotaEditada).then((res) => {
      
      let index = this.globalService.mascotas.indexOf(
        this.globalService.mascotas.find(x => x._id === this.mascotaEditada._id)
      );
      this.globalService.mascotas[index] = this.mascotaEditada;
      this.router.navigateByUrl('/mascotas');
    }).catch((err) => {
      console.log(err);
    });
  }

  crear() {
    this.dm.createMascota(this.mascotaEditada).then((res) => {
      let resCliente: Cliente = res.cliente;
      let resMascota: Mascota = res.mascota;
      this.globalService.mascotas.push(this.mascotaEditada);
      let index = this.globalService.clientes.indexOf(
        this.globalService.clientes.find(x => x._id === resCliente._id)
      );
      this.globalService.clientes[index] = resCliente;
      this.globalService.setMascota(this.mascotaEditada);
      this.router.navigateByUrl('/mascotas');
    }).catch((err) => {
      console.log(err);
    });
  }

  checkFormIsFullfilled() {
    let disabled = true;

    if (this.mascotaEditada.nombre && this.mascotaEditada.chip && this.mascotaEditada.fecNac && this.mascotaEditada.sexo &&
      this.mascotaEditada.estado && this.mascotaEditada.pelo && this.mascotaEditada.capa && this.mascotaEditada.especie &&
      this.mascotaEditada.raza) {
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
          if (this.mascotaEditada.nombre) {
            this.errores.nombre = '';
          }
        }
        break;

      case 'chip':
        if (this.errores.chip != '') {
          if (this.mascotaEditada.chip) {
            this.errores.chip = '';
          }
        }
        break;

      case 'fecNac':
        if (this.errores.fechaNac != '') {
          if (this.mascotaEditada.fecNac) {
            this.errores.fechaNac = '';
          }
        }
        break;

      case 'sexo':
        if (this.errores.sexo != '') {
          if (this.mascotaEditada.sexo) {
            this.errores.sexo = '';
          }
        }
        break;

      case 'estado':
        if (this.errores.estado != '') {
          if (this.mascotaEditada.estado) {
            this.errores.estado = '';
          }
        }
        break;

      case 'pelo':
        if (this.errores.pelo != '') {
          if (this.mascotaEditada.pelo) {
            this.errores.pelo = '';
          }
        }
        break;

      case 'capa':
        if (this.errores.capa != '') {
          if (this.mascotaEditada.capa) {
            this.errores.capa = '';
          }
        }
        break;

      case 'especie':
        if (this.errores.especie != '') {
          if (this.mascotaEditada.especie) {
            this.errores.especie = '';
          }
        }
        break;

      case 'raza':
        if (this.errores.raza != '') {
          if (this.mascotaEditada.raza) {
            this.errores.raza = '';
          }
        }
        break;

      default:
        break;
    }
  }


  compruebaFallos() {
    let res = true;
    if (!this.mascotaEditada.nombre) {
      this.errores.nombre = "obligatorio";
      res = false;
    }
    if (!this.mascotaEditada.chip) {
      this.errores.chip = "obligatorio";
      res = false;
    }
    if (!this.mascotaEditada.fecNac) {
      this.errores.fechaNac = "obligatorio";
      res = false;
    }
    if (!this.mascotaEditada.sexo) {
      this.errores.sexo = "obligatorio";
      res = false;
    }
    if (!this.mascotaEditada.estado) {
      this.errores.estado = "obligatorio";
      res = false;
    }
    if (!this.mascotaEditada.pelo) {
      this.errores.pelo = "obligatorio";
      res = false;
    }
    if (!this.mascotaEditada.capa) {
      this.errores.capa = "obligatorio";
      res = false;
    }
    if (!this.mascotaEditada.especie) {
      this.errores.especie = "obligatorio";
      res = false;
    }
    if (!this.mascotaEditada.raza) {
      this.errores.raza = "obligatorio";
      res = false;
    }
    if(this.comparaFechas(this.mascotaEditada.fecNac, this.mascotaEditada.fecBaj)){
      this.errores.fechaNac = "fechaBaja";
      this.errores.fechaFac = "fechaAlta";
      res = false;
    }
    if(this.compruebaFechaFuturo(this.mascotaEditada.fecNac)){
      this.errores.fechaNac = "fechaFuturo";
      res = false;
    }
    if(this.compruebaFechaFuturo(this.mascotaEditada.fecBaj)){
      this.errores.fechaFac = "fechaFuturo";
      res = false;
    }
    return res;
  }

  compruebaFechaFuturo(fecha){
    let res: boolean = false;
    let now: Date = new Date();
    if(fecha){
      if(new Date(fecha)>now){
        res = true;
      }
    }
    return res;
  }

  comparaFechas(fecNac, fecBaj){
    let res: boolean = false;
    if(fecNac){
      if(fecBaj){
        if(fecNac>fecBaj){
          res = true;
        }
      }
    }
    return res;
  }

}
