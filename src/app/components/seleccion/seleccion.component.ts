import { Component, OnInit, Input } from '@angular/core';
import { Cliente, Mascota, Veterinario } from '../../app.dataModels';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/globalService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {


  constructor(
    private router: Router,
    private location: Location,
    private globalService: GlobalService
  ) { }

  @Input() cliente: Cliente;
  @Input() veterinario: Veterinario;
  @Input() mascota: Mascota;

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  limpiarCliente():void{
    this.globalService.limpiarCliente();
    this.router.navigateByUrl('/seleccionaCliente', {skipLocationChange: true}).then(()=>
    this.router.navigate(["clientes"])); 
  }
}
