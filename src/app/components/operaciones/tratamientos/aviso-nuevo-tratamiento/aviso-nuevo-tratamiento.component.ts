import { Component, OnInit } from '@angular/core';
import { remote, ipcRenderer } from 'electron';

@Component({
  selector: 'app-aviso-nuevo-tratamiento',
  templateUrl: './aviso-nuevo-tratamiento.component.html',
  styleUrls: ['./aviso-nuevo-tratamiento.component.scss']
})
export class AvisoNuevoTratamientoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cerrarVentana() {
    let window = remote.getCurrentWindow();
    ipcRenderer.send('request-update-in-window', null);
    window.close();
  }

  elegirMascota() {
    let window = remote.getCurrentWindow();
    let Data = {
        action: "elegir"
    };

    // Trigger the event listener action to this event in the renderer process and send the data
    ipcRenderer.send('request-update-in-window', Data);
    window.close();
  }
}
