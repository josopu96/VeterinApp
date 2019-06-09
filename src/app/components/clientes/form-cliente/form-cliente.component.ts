import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../app.dataModels';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../services/globalService';
import { DataManagement } from '../../../services/dataManagement';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  clienteEditado: Cliente = new Cliente();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    if ((<HTMLInputElement>document.getElementById('nac_dt'))) {
      (<HTMLInputElement>document.getElementById('nac_dt')).max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    }
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params && params['id']) {
        this.new = false;
        // Mandatories
        this.clienteEditado._id = params["id"];
        this.clienteEditado.nombre = params["nombre"];
        this.clienteEditado.apellidos = params["apellidos"];
        this.clienteEditado.dni = params["dni"];

        // Optionals
        this.clienteEditado.direccion = params["direccion"];
        this.clienteEditado.poblacion = params["poblacion"];
        this.clienteEditado.codPostal = params["codPostal"];
        this.clienteEditado.email = params["email"];
        this.clienteEditado.fecNac = params["fecNac"];
        this.ready = true;
      } else {
        this.new = true;
      }
    });
  }

  guardar() {
    if (this.clienteEditado._id) {
      this.actualizar();
    } else {
      this.crear();
    }
  }

  actualizar() {
    this.dm.updateCliente(this.clienteEditado).then((res) => {
      let index = this.globalService.clientes.indexOf(
        this.globalService.clientes.find(x => x._id === this.clienteEditado._id)
      );
      this.globalService.clientes[index] = this.clienteEditado;
      this.router.navigateByUrl('/clientes');
    }).catch((err) => {
      console.log(err);
    });
  }

  crear() {
    this.dm.createCliente(this.clienteEditado).then((res) => {
      this.globalService.clientes.push(this.clienteEditado);
      this.router.navigateByUrl('/clientes');
    }).catch((err) => {
      console.log(err);
    });
  }

  checkFormIsFullfilled() {
    let disabled = true;

    if (this.clienteEditado.nombre && this.clienteEditado.apellidos && this.clienteEditado.dni) {
      disabled = false;
    }

    return disabled;
  }

}
