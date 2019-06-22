import { Component, OnInit } from '@angular/core';
import { remote, ipcRenderer } from 'electron';
import { Contacto } from '../../../app.dataModels';

@Component({
  selector: 'app-form-cliente-contacto',
  templateUrl: './form-cliente-contacto.component.html',
  styleUrls: ['./form-cliente-contacto.component.scss']
})
export class FormClienteContactoComponent implements OnInit {

  contactoEditado: Contacto;

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
        action: "elegir"
    };

    // Trigger the event listener action to this event in the renderer process and send the data
    ipcRenderer.send('request-update-in-window', Data);
    window.close();
  }
}
