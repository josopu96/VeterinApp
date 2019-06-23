import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { remote, ipcRenderer } from 'electron';
import { Contacto } from '../../../app.dataModels';

@Component({
  selector: 'app-form-cliente-contacto',
  templateUrl: './form-cliente-contacto.component.html',
  styleUrls: ['./form-cliente-contacto.component.scss']
})
export class FormClienteContactoComponent implements OnInit {

  contactoEditado: Contacto = new Contacto();

  constructor() { }

  ngOnInit() {
  }


  cerrarVentana() {
    let window = remote.getCurrentWindow();
    ipcRenderer.send('request-update-in-window', null);
    window.close();
  }

  guardarContacto() {
    let window = remote.getCurrentWindow();
    let Data = {
        action: "guardar",
        contactoEditado: this.contactoEditado
    };

    ipcRenderer.send('request-update-in-window', Data);
    window.close();
  }

}
