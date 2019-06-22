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
  edit: boolean;
  ready = false;
  clinica: Clinica = new Clinica;
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
        this.clinica._id = params["id"];
        this.clinica.cif = params["cif"];
        this.clinica.nombre = params["nombre"];
        this.clinica.telefono = params["telefono"] !== "null" ? params["telefono"] : "";
        this.clinica.movil = params["movil"] !== "null" ? params["movil"] : "";
        this.clinica.fax = params["fax"] !== "null" ? params["fax"] : "";
        this.clinica.direccion = params["direccion"];
        this.clinica.provincia = params["provincia"];
        this.clinica.poblacion = params["poblacion"];
        this.clinica.codPostal = params["codPostal"];
        this.clinica.pais = params["pais"];
        this.clinica.web = params["web"];
        this.clinica.email = params["email"];
        this.clinica.imagen = params["imagen"];
        this.clinica.propietario = params["propietario"];
        this.clinica.dniPropietario = params["dniPropietario"];

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
        this.clinicaEditada.imagen = params["imagen"];
        this.clinicaEditada.propietario = params["propietario"];
        this.clinicaEditada.dniPropietario = params["dniPropietario"];
        this.ready = true;
        console.log(params["imagen"]);
      }
    });
    this.edit = false;
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
      }
    }
  }

  cancelar(){
    this.clinicaEditada = new Clinica();
    this.clinicaEditada._id = this.clinica._id;
    this.clinicaEditada.cif = this.clinica.cif;
    this.clinicaEditada.nombre = this.clinica.nombre;
    this.clinicaEditada.telefono = this.clinica.telefono;
    this.clinicaEditada.movil = this.clinica.movil;
    this.clinicaEditada.fax = this.clinica.fax;
    this.clinicaEditada.direccion = this.clinica.direccion;
    this.clinicaEditada.provincia = this.clinica.provincia;
    this.clinicaEditada.poblacion = this.clinica.poblacion;
    this.clinicaEditada.codPostal = this.clinica.codPostal;
    this.clinicaEditada.pais = this.clinica.pais;
    this.clinicaEditada.web = this.clinica.web;
    this.clinicaEditada.email = this.clinica.email;
    this.clinicaEditada.imagen = this.clinica.imagen;
    this.clinicaEditada.propietario = this.clinica.propietario;
    this.clinicaEditada.dniPropietario = this.clinica.dniPropietario;
    this.actualizaImagenSpan(this.clinica.imagen);
    this.edit = false;
  }

  actualizar() {
    this.dm.updateClinica(this.clinicaEditada).then((res) => {
      this.globalService.clinica = this.clinicaEditada;
      this.clinica = new Clinica();
      this.clinica._id = this.clinicaEditada._id;
      this.clinica.cif = this.clinicaEditada.cif;
      this.clinica.nombre = this.clinicaEditada.nombre;
      this.clinica.telefono = this.clinicaEditada.telefono;
      this.clinica.movil = this.clinicaEditada.movil;
      this.clinica.fax = this.clinicaEditada.fax;
      this.clinica.direccion = this.clinicaEditada.direccion;
      this.clinica.provincia = this.clinicaEditada.provincia;
      this.clinica.poblacion = this.clinicaEditada.poblacion;
      this.clinica.codPostal = this.clinicaEditada.codPostal;
      this.clinica.pais = this.clinicaEditada.pais;
      this.clinica.web = this.clinicaEditada.web;
      this.clinica.email = this.clinicaEditada.email;
      this.clinica.imagen = this.clinicaEditada.imagen;
      this.clinica.propietario = this.clinicaEditada.propietario;
      this.clinica.dniPropietario = this.clinicaEditada.dniPropietario;
      this.actualizaImagenSpan(this.clinicaEditada.imagen);
      this.edit = false;
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

  imagenReady: boolean;

  tooltip(e) {
    if(!this.imagenReady){
      this.inicializaSpanImagen();
      this.imagenReady = true;
    }
    let tooltips: NodeListOf<HTMLElement> = document.querySelectorAll('.texto_error span');
    let tooltipImagen: any = document.getElementById('mostrarImagen');
    let x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
    let x_imagen = (e.clientX - 230) + 'px',
      y_imagen = (e.clientY - 230) + 'px';
    if(tooltipImagen){
      tooltipImagen.style.top = y_imagen;
      tooltipImagen.style.left = x_imagen;
    }
    if (tooltips) {
      for (let i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
      }
    }
  }

  inicializaSpanImagen(){
    let tooltip: any = document.getElementById('mostrarImagen');
    if (tooltip) {
      if (tooltip.childNodes.length > 0) {
        tooltip.removeChild(tooltip.childNodes[0]);
      }
      if (this.clinica.imagen) {
        let imagen = new Image();
        imagen.width = 200;
        imagen.height = 200;
        imagen.src = this.clinica.imagen;
        tooltip.appendChild(imagen);
      } else {
        this.ocultaSpanImagen = true;
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

  files: any;
  ocultaSpanImagen: boolean;
  //Subida de imágenes
  cargarImagen(event) {
    this.files = event.target.files;
    let img : Buffer;
    console.log(this.files[0].size);
    if (this.files[0].size > 62000) {
      // mostrar error de imagen grande
      console.log("archivo demasiado grande");
      
    } else {
      const reader = new FileReader();
      reader.readAsBinaryString(this.files[0]);
      reader.onload = this._handleReaderLoaded.bind(this);
      let tooltip: any = document.getElementById('mostrarImagen');
      if (tooltip) {
        this.ocultaSpanImagen = true;
      }
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    let filestring = btoa(binaryString);  // Converting binary string data.
    filestring = "data:" + this.files[0].type + ";base64, " + filestring;
    this.clinicaEditada.imagen = filestring;
    console.log(filestring);
    let tooltip: any = document.getElementById('mostrarImagen');
    if (tooltip) {
      let imagen = new Image();
      imagen.width = 200;
      imagen.height = 200;
      imagen.src = filestring;
      if (tooltip.childNodes.length > 0) {
        tooltip.removeChild(tooltip.childNodes[0]);
      }
      tooltip.appendChild(imagen);
      this.ocultaSpanImagen = false;
    }
  }

  actualizaImagenSpan(imagenString: string){
    let tooltip: any = document.getElementById('mostrarImagen');
    if (tooltip) {
      let imagen = new Image();
      imagen.width = 200;
      imagen.height = 200;
      imagen.src = imagenString;
      if (tooltip.childNodes.length > 0) {
        tooltip.removeChild(tooltip.childNodes[0]);
      }
      tooltip.appendChild(imagen);
      this.ocultaSpanImagen = false;
    }
  }
}
