import { Component, OnInit } from '@angular/core';
import { remote, ipcRenderer } from 'electron';

@Component({
  selector: 'app-aviso-nueva-mascota',
  templateUrl: './aviso-nueva-mascota.component.html',
  styleUrls: ['./aviso-nueva-mascota.component.scss']
})
export class AvisoNuevaMascotaComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

  cerrarVentana(){
    let window = remote.getCurrentWindow(); 
    ipcRenderer.send('request-update-in-window', null);
    window.close(); 
  }

  elegirCliente(){
    let window = remote.getCurrentWindow(); 
    let Data = {
        action: "elegir"
    };

    // Trigger the event listener action to this event in the renderer process and send the data
    ipcRenderer.send('request-update-in-window', Data);
    window.close();
  }

  continuarSinCliente(){
    let window = remote.getCurrentWindow(); 
    let Data = {
        action: "continuar"
    };

    // Trigger the event listener action to this event in the renderer process and send the data
    ipcRenderer.send('request-update-in-window', Data);
    window.close();
  }
}
