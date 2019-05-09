import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../../../models/bundle';
import { GlobalService } from '../../../services/globalService';
import { DataManagement } from '../../../services/dataManagement';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-veterinario',
  templateUrl: './form-veterinario.component.html',
  styleUrls: ['./form-veterinario.component.scss']
})
export class FormVeterinarioComponent implements OnInit {

  tema = "_claro";
  new: boolean;
  ready = false;
  veterinarioEditado: Veterinario = new Veterinario;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params) {
        console.log(params);
        this.new = false;
        this.veterinarioEditado._id = params["id"];
        this.veterinarioEditado.nombre = params["nombre"];
        this.veterinarioEditado.apellidos = params["apellidos"];
        this.veterinarioEditado.dni = params["dni"];
        this.veterinarioEditado.fecNac = params["fecNac"];
        this.veterinarioEditado.numColegiado = params["numColegiado"];
        this.veterinarioEditado.telefono = params["telefono"];
        this.ready = true;
      } else {
        this.new = true;
      }
    });
  }

  guardar() {
    if (this.veterinarioEditado._id) {
      this.actualizar();
    } else {
      this.crear();
    }
  }

  actualizar() {
    this.dm.updateVeterinario(this.veterinarioEditado).then((res) => {
      let params = {
        'id': this.veterinarioEditado._id,
        'nombre': this.veterinarioEditado.nombre,
        'apellidos': this.veterinarioEditado.apellidos,
        'fecNac': this.veterinarioEditado.fecNac,
        'dni': this.veterinarioEditado.dni,
        'telefono': this.veterinarioEditado.telefono,
        'numColegiado': this.veterinarioEditado.numColegiado
      };
      this.router.navigate(['formVeterinario', params]);
    }).catch((err) => {
      console.log(err);
    });
  }

  crear() {
    this.dm.createVeterinario(this.veterinarioEditado).then((res) => {
      this.router.navigateByUrl('/veterinarios');
    }).catch((err) => {
      console.log(err);
// tslint:disable-next-line: triple-equals
      if (err == "null") {
        this.router.navigateByUrl('/veterinarios');
      }
    });
  }
}
