import { Component, OnInit } from '@angular/core';
import { Mascota, Cliente, Contacto } from '../../../app.dataModels';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../services/globalService';
import { DataManagement } from '../../../services/dataManagement';

@Component({
  selector: 'app-form-mascotas',
  templateUrl: './form-mascotas.component.html',
  styleUrls: ['./form-mascotas.component.scss']
})
export class FormMascotasComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  mascotaEditada: Mascota = new Mascota();
  clienteSeleccionado: Cliente;
  sinCliente: Boolean = false;
  telefono: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.globalService.getMascotas();
    this.clienteSeleccionado = this.globalService.cliente;
    if(this.clienteSeleccionado._id != "0"){
      if(this.clienteSeleccionado._id == this.globalService.clienteEspecial._id){
        this.sinCliente = true;
      } else {
        if(this.clienteSeleccionado.contactos){
          if(this.clienteSeleccionado.contactos.length>0){
            this.telefono = this.clienteSeleccionado.contactos[0].telefono;
          }
        }
      }
    } else {
      //esta opción sólo se dará en desarrollo, cuando se reinicia el servidor en esta página.
      this.metodoDesarrollo();
    }
    if ((<HTMLInputElement>document.getElementById('nac_dt'))) {
      (<HTMLInputElement>document.getElementById('nac_dt')).max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    }
    if ((<HTMLInputElement>document.getElementById('def_dt'))) {
      (<HTMLInputElement>document.getElementById('def_dt')).max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    }
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params && params['id']) {
        this.new = false;
        this.mascotaEditada._id = params["id"];
        this.mascotaEditada.nombre = params["nombre"];
        this.mascotaEditada.chip = params["chip"];
        this.mascotaEditada.fecNac = params["fecNac"];
        this.mascotaEditada.fecBaj = params["fecBaj"] !== 'null' ? params["fecBaj"] : null;
        this.mascotaEditada.sexo = params["sexo"];
        this.mascotaEditada.estado = params["estado"];
        this.mascotaEditada.pelo = params["pelo"];
        this.mascotaEditada.capa = params["capa"];
        this.mascotaEditada.especie = params["especie"];
        this.mascotaEditada.raza = params["raza"];
        this.ready = true;
      } else {
        this.new = true;
      }
    });
  }

  metodoDesarrollo(){
    this.sinCliente = false;
    this.clienteSeleccionado = new Cliente();
    this.clienteSeleccionado._id = "0";
    this.clienteSeleccionado.nombre = "Dev";
    this.clienteSeleccionado.apellidos = "Dev";
    this.clienteSeleccionado.dni = "Dev";
    this.clienteSeleccionado.contactos = [];
    let contacto: Contacto = new Contacto();
    contacto.telefono = "tel_dev";
    this.clienteSeleccionado.contactos.push(contacto);
  }

  guardar() {
    if (this.mascotaEditada._id) {
      this.actualizar();
    } else {
      this.crear();
    }
  }

  actualizar() {
    this.dm.updateMascota(this.mascotaEditada).then((res) => {
      let index = this.globalService.mascotas.indexOf(
        this.globalService.mascotas.find(x => x._id === this.mascotaEditada._id)
      );
      this.globalService.mascotas[index] = this.mascotaEditada;
      this.router.navigateByUrl('/mascotas');
    }).catch((err) => {
      console.log(err);
    });
  }

  crear() {
    this.dm.createMascota(this.mascotaEditada).then((res) => {
      this.globalService.mascotas.push(this.mascotaEditada);
      this.router.navigateByUrl('/mascotas');
    }).catch((err) => {
      console.log(err);
    });
  }

  checkFormIsFullfilled() {
    let disabled = true;

    if (this.mascotaEditada.nombre && this.mascotaEditada.chip && this.mascotaEditada.fecNac && this.mascotaEditada.sexo &&
      this.mascotaEditada.estado && this.mascotaEditada.pelo && this.mascotaEditada.capa && this.mascotaEditada.especie &&
      this.mascotaEditada.raza) {
      disabled = false;
    }

    return disabled;
  }
}
