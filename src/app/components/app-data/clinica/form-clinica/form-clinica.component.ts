import { Component, OnInit } from '@angular/core';
import { Clinica } from '../../../../app.dataModels';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../services/globalService';
import { DataManagement } from '../../../../services/dataManagement';

@Component({
  selector: 'app-form-clinica',
  templateUrl: './form-clinica.component.html',
  styleUrls: ['./form-clinica.component.scss']
})
export class FormClinicaComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  clinicaEditada: Clinica = new Clinica;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params && params['id']) {
        this.new = false;
        this.clinicaEditada._id = params["id"];
        this.clinicaEditada.cif = params["cif"];
        this.clinicaEditada.nombre = params["nombre"];
        this.clinicaEditada.telefono = params["telefono"] !== "null" ? params["telefono"] : "";
        this.clinicaEditada.movil = params["movil"] !== "null" ? params["movil"] : "";
        this.clinicaEditada.fax = params["fax"] !== "null" ? params["fax"] : "";
        this.clinicaEditada.direccion = params["direccion"];
        this.clinicaEditada.provincia = params["provincia"];
        this.clinicaEditada.poblacion = params["poblacion"];
        this.clinicaEditada.codPostal = params["codPostal"];
        this.clinicaEditada.pais = params["pais"];
        this.clinicaEditada.web = params["web"];
        this.clinicaEditada.email = params["email"];
        this.clinicaEditada.propietario = params["propietario"];
        this.clinicaEditada.dniPropietario = params["dniPropietario"];
        this.ready = true;
      } else {
        this.new = true;
      }
    });
  }

  guardar() {
    if (this.clinicaEditada._id) {
      this.actualizar();
    } else {
    }
  }

  actualizar() {
    this.dm.updateClinica(this.clinicaEditada).then((res) => {
      this.router.navigateByUrl('/appData');
    }).catch((err) => {
      this.router.navigateByUrl('/appData');
    });
  }

  checkFormIsFullfilled() {
    let disabled = true;

    if (this.clinicaEditada.cif && this.clinicaEditada.nombre && this.clinicaEditada.direccion &&
      this.clinicaEditada.provincia && this.clinicaEditada.poblacion && this.clinicaEditada.codPostal &&
      this.clinicaEditada.pais && this.clinicaEditada.propietario && this.clinicaEditada.dniPropietario) {
      disabled = false;
    }

    return disabled;
  }

}
