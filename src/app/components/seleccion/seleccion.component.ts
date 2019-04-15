import { Component, OnInit, Input } from '@angular/core';
import { Cliente, Mascota, Veterinario } from '../../app.dataModels';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {


  constructor(
    private location: Location
  ) { }

  @Input() cliente: Cliente;
  @Input() veterinario: Veterinario;
  @Input() mascota: Mascota;

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
