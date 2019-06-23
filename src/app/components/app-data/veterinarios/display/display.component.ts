import { Component, OnInit } from '@angular/core';
import { remote, ipcRenderer } from 'electron';
import { GlobalService } from '../../../../services/globalService';
import { Veterinario } from '../../../../app.dataModels';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  veterinarioDisplay: Veterinario;

  constructor(
    private globalService: GlobalService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.veterinarioDisplay = JSON.parse(this.cookieService.get('veterinarioDisplay'));
  }

  cerrarVentana() {
    let window = remote.getCurrentWindow();
    ipcRenderer.send('request-update-in-window', null);
    window.close();
  }
}
