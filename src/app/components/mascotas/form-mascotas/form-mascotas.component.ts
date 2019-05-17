import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../app.dataModels';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.globalService.getMascotas();
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
        this.mascotaEditada.fecBaj = params["fecBaj"];
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

  guardar() {
    if (this.mascotaEditada._id) {
      this.actualizar();
    } else {
      this.crear();
      this.globalService.mascotas.push(this.mascotaEditada);
    }
  }

  actualizar() {
    this.dm.updateMascota(this.mascotaEditada).then((res) => {
      this.router.navigateByUrl('/mascotas');
    }).catch((err) => {
      this.router.navigateByUrl('/mascotas');
    });
  }

  crear() {
    this.dm.createMascota(this.mascotaEditada).then((res) => {
      this.router.navigateByUrl('/mascotas');
    }).catch((err) => {
      this.router.navigateByUrl('/mascotas');
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
