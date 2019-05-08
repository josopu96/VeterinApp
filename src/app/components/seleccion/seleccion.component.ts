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
  tema: string = "_claro";

  ngOnInit() {
    this.tema = "_"+this.globalService.getTema();
  }

  goBack(): void {
    this.location.back();
  }

  limpiarCliente():void{
    if(this.globalService.getCliente().id!="0"){
      this.globalService.limpiarCliente();
      this.router.navigateByUrl('/seleccionaCliente', {skipLocationChange: true}).then(()=>
      this.router.navigate(["clientes"]));
    }
  }
  limpiarMascota():void{
    if(this.globalService.getMascota().id!="0"){
      this.globalService.limpiarMascota();
      this.router.navigateByUrl('/seleccionaMascota', {skipLocationChange: true}).then(()=>
      this.router.navigate(["mascotas"]));
    }
  }
  limpiarVeterinario():void{
    if(this.globalService.getVeterinario().id!="0"){
      this.globalService.limpiarVeterinario();
      this.router.navigateByUrl('/seleccionaVeterinario', {skipLocationChange: true}).then(()=>
      this.router.navigate(["veterinarios"]));
    }
  }
}
