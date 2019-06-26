import { Component, OnInit } from '@angular/core';
import { remote, ipcRenderer } from 'electron';

@Component({
  selector: 'app-aviso-nueva-analitica',
  templateUrl: './aviso-nueva-analitica.component.html',
  styleUrls: ['./aviso-nueva-analitica.component.scss']
})
export class AvisoNuevaAnaliticaComponent implements OnInit {

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
