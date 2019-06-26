import { Component, OnInit } from '@angular/core';
import { remote, ipcRenderer } from 'electron';

@Component({
  selector: 'app-aviso-nueva-vacuna',
  templateUrl: './aviso-nueva-vacuna.component.html',
  styleUrls: ['./aviso-nueva-vacuna.component.scss']
})
export class AvisoNuevaVacunaComponent implements OnInit {

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
