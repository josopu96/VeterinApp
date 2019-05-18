import { Component, OnInit, Input } from '@angular/core';
import { Cliente, Mascota, Veterinario, Contacto } from '../../app.dataModels';
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
  tema: string = "_oscuro";

  contacto: Contacto;
  sinCliente: Boolean = false;
  time: Date = new Date();
  edadMascota: string;

  //variables para ajustar css
  claseNombreCliente: string = "";
  claseApellidosCliente: string = "";
  claseDniCliente: string = "";
  claseTelefonoCliente: string = "";
  claseNombreMascota: string = "";
  claseChipMascota: string = "";
  claseEspecieMascota: string = "";

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
    if(this.cliente){
      if(this.cliente._id=="100000000000000000000000"){
        this.sinCliente=true;
      }
    }
    this.getContacto();
    this.getClasesCliente();
    this.getClasesMascota();
    this.getEdadMascota();
  }

  goBack(): void {
    this.location.back();
  }

  getClasesCliente() {
    if (this.cliente) {
      if (this.cliente._id != "0" && !this.sinCliente) {
        if (this.cliente.nombre.length > 15) {
          this.claseNombreCliente = "letraPequeña";
        } else if (this.cliente.nombre.length > 11) {
          this.claseNombreCliente = "letraMedia";
        }
        if (this.cliente.apellidos.length > 20) {
          this.claseApellidosCliente = "letraMuyPequeña";
        } else if (this.cliente.apellidos.length > 15) {
          this.claseApellidosCliente = "letraPequeña";
        }
        if (this.cliente.dni.length > 14) {
          this.claseDniCliente = "letraPequeña";
        }
      }
    }
  }

  getClasesMascota() {
    if (this.mascota) {
      if (this.mascota._id != "0") {
        if (this.mascota.nombre.length > 15) {
          this.claseNombreMascota = "letraPequeña";
        } else if (this.mascota.nombre.length > 11) {
          this.claseNombreMascota = "letraMedia";
        }
        if (this.mascota.chip.length > 20) {
          this.claseChipMascota = "letraMuyPequeña";
        } else if (this.mascota.chip.length > 14) {
          this.claseChipMascota = "letraPequeña";
        }
        if (this.mascota.especie.length > 15) {
          this.claseEspecieMascota = "letraPequeña";
        }
      }
    }
  }

  getContacto() {
    this.contacto = null;
    if (this.cliente) {
      if (this.cliente._id != "0" && !this.sinCliente) {
        if (this.cliente.contactos) {
          let moviles = this.cliente.contactos.filter(contacto => contacto.tipo == 'movil');
          if (moviles.length > 0) {
            this.contacto = moviles[0];
            if (this.contacto.telefono.length > 14) {
              this.claseTelefonoCliente = "letraPequeña";
            }
          } else {
            let resto = this.cliente.contactos.filter(contacto => contacto.tipo != 'movil');
            if (resto.length > 0) {
              this.contacto = resto[0];
              if (this.contacto.telefono.length > 14) {
                this.claseTelefonoCliente = "letraPequeña";
              }
            }
          }
        }
      }
    }
  }

  getEdadMascota(){
    if(this.mascota){
      if(this.mascota._id != "0"){
        
        let diferencia = Math.abs(Date.now() - new Date(this.mascota.fecNac).getTime());
        let años = Math.floor((diferencia / (1000 * 3600 * 24))/365.25);
        let meses: number;
        let mesNac = new Date(this.mascota.fecNac).getMonth() + 1;
        let mesHoy = this.time.getMonth()+1;
        meses = mesHoy-mesNac;
        if(meses<0){
          meses = meses +12;
        }
        let a = " años ";
        let m = " meses ";
        if(años==1){
          a = " año "
        }
        if(meses==1){
          m = " mes "
        }

        this.edadMascota= años+a+"y "+meses+m;
        console.log(this.edadMascota);
      }
    }
  }

  limpiarCliente(): void {
    if (this.globalService.getCliente()._id != "0") {
      this.globalService.limpiarCliente();
      this.router.navigateByUrl('/seleccionaCliente', { skipLocationChange: true }).then(() =>
        this.router.navigate(["clientes"]));
    }
  }
  limpiarMascota(): void {
    if (this.globalService.getMascota()._id != "0") {
      this.globalService.limpiarMascota();
      this.router.navigateByUrl('/seleccionaMascota', { skipLocationChange: true }).then(() =>
        this.router.navigate(["mascotas"]));
    }
  }
  limpiarVeterinario(): void {
    if (this.globalService.getVeterinario()._id != "0") {
      this.globalService.limpiarVeterinario();
      this.router.navigateByUrl('/seleccionaVeterinario', { skipLocationChange: true }).then(() =>
        this.router.navigate(["veterinarios"]));
    }
  }
}
