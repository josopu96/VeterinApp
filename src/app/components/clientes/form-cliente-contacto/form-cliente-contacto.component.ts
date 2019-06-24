import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { remote, ipcRenderer } from 'electron';
import { Contacto } from '../../../app.dataModels';
import { ErroresFormContacto } from '../../../models/errores';

@Component({
  selector: 'app-form-cliente-contacto',
  templateUrl: './form-cliente-contacto.component.html',
  styleUrls: ['./form-cliente-contacto.component.scss']
})
export class FormClienteContactoComponent implements OnInit {

  contactoEditado: Contacto = new Contacto();
  errores: ErroresFormContacto = new ErroresFormContacto();

  constructor() { }

  ngOnInit() {
    this.inicializaErrores();
    this.contactoEditado.tipo = "movil";
  }

  inicializaErrores() {
    this.errores.nombre = '';
    this.errores.telefono = '';
    this.errores.tipo = '';
  }

  cerrarVentana() {
    let window = remote.getCurrentWindow();
    ipcRenderer.send('request-update-in-window', null);
    window.close();
  }

  guardarContacto() {
    if (this.compruebaFallos()) {
      let window = remote.getCurrentWindow();
      let Data = {
        action: "guardar",
        contactoEditado: this.contactoEditado
      };

      ipcRenderer.send('request-update-in-window', Data);
      window.close();
    }
  }

  tooltip(e) {
    let tooltips: NodeListOf<HTMLElement> = document.querySelectorAll('span.tooltip');
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
        this.errores.nombre = '';
        break;

      case 'tipo':
        this.errores.tipo = '';
        break;

      case 'telefono':
        this.errores.telefono = '';
        break;

      default:
        break;
    }
  }


  compruebaFallos() {
    let res = true;
    if (!this.contactoEditado.nombre) {
      this.errores.nombre = "obligatorio";
      res = false;
    }
    if (!this.contactoEditado.telefono) {
      this.errores.telefono = "obligatorio";
      res = false;
    }
    return res;
  }

}
