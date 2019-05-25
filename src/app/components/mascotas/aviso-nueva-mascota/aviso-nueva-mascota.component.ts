import { Component, OnInit } from '@angular/core';
import { remote } from 'electron';

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
    window.close(); 
  }
}
