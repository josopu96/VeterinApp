import { Component, OnInit } from '@angular/core';
import { Clinica } from '../../../../app.dataModels';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../services/globalService';
import { DataManagement } from '../../../../services/dataManagement';
import { ErroresFormClinica } from '../../../../models/errores';

@Component({
  selector: 'app-form-clinica',
  templateUrl: './form-clinica.component.html',
  styleUrls: ['./form-clinica.component.scss']
})
export class FormClinicaComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  clinicaEditada: Clinica = new Clinica;
  errores: ErroresFormClinica = new ErroresFormClinica();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.inicializaErrores();
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params && params['id']) {
        this.new = false;
        this.clinicaEditada._id = params["id"];
        this.clinicaEditada.cif = params["cif"];
        this.clinicaEditada.nombre = params["nombre"];
        this.clinicaEditada.telefono = params["telefono"] !== "null" ? params["telefono"] : "";
        this.clinicaEditada.movil = params["movil"] !== "null" ? params["movil"] : "";
        this.clinicaEditada.fax = params["fax"] !== "null" ? params["fax"] : "";
        this.clinicaEditada.direccion = params["direccion"];
        this.clinicaEditada.provincia = params["provincia"];
        this.clinicaEditada.poblacion = params["poblacion"];
        this.clinicaEditada.codPostal = params["codPostal"];
        this.clinicaEditada.pais = params["pais"];
        this.clinicaEditada.web = params["web"];
        this.clinicaEditada.email = params["email"];
        this.clinicaEditada.propietario = params["propietario"];
        this.clinicaEditada.dniPropietario = params["dniPropietario"];
        this.ready = true;
      } else {
        this.new = true;
      }
    });
  }

  inicializaErrores() {

    this.errores.cif = '';
    this.errores.nombre = '';
    this.errores.direccion = '';
    this.errores.telefono = '';
    this.errores.movil = '';
    this.errores.fax = '';
    this.errores.poblacion = '';
    this.errores.provincia = '';
    this.errores.pais = '';
    this.errores.codPostal = '';
    this.errores.web = '';
    this.errores.imagen = '';
    this.errores.email = '';
    this.errores.propietario = '';
    this.errores.dniPropietario = '';
  }

  guardar() {
    if (this.compruebaFallos()) {
      if (this.clinicaEditada._id) {
        this.actualizar();
      } else {
      }
    }
  }

  actualizar() {
    this.dm.updateClinica(this.clinicaEditada).then((res) => {
      this.globalService.clinica = this.clinicaEditada;
      this.router.navigateByUrl('/appData');
    }).catch((err) => {
      console.log(err);
    });
  }

  checkFormIsFullfilled() {
    let disabled = true;

    if (this.clinicaEditada.cif && this.clinicaEditada.nombre && this.clinicaEditada.direccion &&
      this.clinicaEditada.provincia && this.clinicaEditada.poblacion && this.clinicaEditada.codPostal &&
      this.clinicaEditada.pais && this.clinicaEditada.propietario && this.clinicaEditada.dniPropietario) {
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
          if (this.clinicaEditada.nombre) {
            this.errores.nombre = '';
          }
        }
        break;

      case 'cif':
        if (this.errores.cif != '') {
          if (this.clinicaEditada.cif) {
            this.errores.cif = '';
          }
        }
        break;

      case 'direccion':
        if (this.errores.direccion != '') {
          if (this.clinicaEditada.direccion) {
            this.errores.direccion = '';
          }
        }
        break;

      case 'telefono':
        if (this.errores.telefono != '') {
          if (this.clinicaEditada.telefono) {
            this.errores.telefono = '';
          }
        }
        break;

      case 'movil':
        if (this.errores.movil != '') {
          if (this.clinicaEditada.movil) {
            this.errores.movil = '';
          }
        }
        break;

      case 'fax':
        if (this.errores.fax != '') {
          if (this.clinicaEditada.fax) {
            this.errores.fax = '';
          }
        }
        break;

      case 'poblacion':
        if (this.errores.poblacion != '') {
          if (this.clinicaEditada.poblacion) {
            this.errores.poblacion = '';
          }
        }
        break;

      case 'provincia':
        if (this.errores.provincia != '') {
          if (this.clinicaEditada.provincia) {
            this.errores.provincia = '';
          }
        }
        break;

      case 'pais':
        if (this.errores.pais != '') {
          if (this.clinicaEditada.pais) {
            this.errores.pais = '';
          }
        }
        break;

      case 'codPostal':
        if (this.errores.codPostal != '') {
          if (this.clinicaEditada.codPostal) {
            this.errores.codPostal = '';
          }
        }
        break;

      case 'web':
        if (this.errores.web != '') {
          if (this.clinicaEditada.web) {
            this.errores.web = '';
          }
        }
        break;

      case 'imagen':
        if (this.errores.imagen != '') {
          if (this.clinicaEditada.imagen) {
            this.errores.imagen = '';
          }
        }
        break;
        
      case 'email':
        if (this.errores.email != '') {
          if (this.clinicaEditada.email) {
            this.errores.email = '';
          }
        }
        break;
        
      case 'propietario':
        if (this.errores.propietario != '') {
          if (this.clinicaEditada.propietario) {
            this.errores.propietario = '';
          }
        }
        break;
        
      case 'dniPropietario':
        if (this.errores.dniPropietario != '') {
          if (this.clinicaEditada.dniPropietario) {
            this.errores.dniPropietario = '';
          }
        }
        break;

      default:
        break;
    }
  }


  compruebaFallos() {
    let res = true;
    if (!this.clinicaEditada.nombre) {
      this.errores.nombre = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.cif) {
      this.errores.cif = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.direccion) {
      this.errores.direccion = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.provincia) {
      this.errores.provincia = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.poblacion) {
      this.errores.poblacion = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.codPostal) {
      this.errores.codPostal = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.pais) {
      this.errores.pais = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.propietario) {
      this.errores.propietario = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.dniPropietario) {
      this.errores.dniPropietario = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.nombre) {
      this.errores.nombre = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.nombre) {
      this.errores.nombre = "obligatorio";
      res = false;
    }
    if (!this.clinicaEditada.nombre) {
      this.errores.nombre = "obligatorio";
      res = false;
    }
    if (this.compruebaTipoImagen(this.clinicaEditada.imagen)) {
      this.errores.imagen = "tipoImagen";
      res = false;
    } else if (this.compruebaCapacidadImagen(this.clinicaEditada.imagen)) {
      this.errores.imagen = "capacidadImagen";
      res = false;
    }
    return res;
  }

  compruebaTipoImagen(imagen) {
    let res: boolean = false;
    return res;
  }

  compruebaCapacidadImagen(imagen) {
    let res: boolean = false;
    return res;
  }
}
