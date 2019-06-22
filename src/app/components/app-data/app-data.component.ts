import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/globalService';
import { DataManagement } from '../../services/dataManagement';

@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.scss']
})
export class AppDataComponent implements OnInit {

  tema = "_oscuro";

  constructor(
    private dm: DataManagement,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
  }

  editarClinica() {
    this.dm.getClinicaById("5cb9a4d4dd4f5326044c59f6").then((res) => {
      let params = {
        'id': res._id,
        'cif': res.cif,
        'nombre': res.nombre,
        'direccion': res.direccion,
        'provincia': res.provincia,
        'poblacion': res.poblacion,
        'codPostal': res.codPostal,
        'pais': res.pais,
        'propietario': res.propietario,
        'dniPropietario': res.dniPropietario,
        'telefono': res.telefono,
        'movil': res.movil,
        'imagen': res.imagen,
        'fax': res.fax,
        'web': res.web,
        'email': res.email
      };
      this.router.navigate(['formClinica', params]);
    });

  }
}
