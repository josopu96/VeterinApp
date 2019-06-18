import { Component, OnInit } from '@angular/core';
import { Tratamiento } from '../../../../app.dataModels';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../services/globalService';
import { DataManagement } from '../../../../services/dataManagement';

@Component({
  selector: 'app-form-tratamiento',
  templateUrl: './form-tratamiento.component.html',
  styleUrls: ['./form-tratamiento.component.scss']
})
export class FormTratamientoComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  tratamientoEditado: Tratamiento = new Tratamiento;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params["id"]) {
        this.new = false;
        this.tratamientoEditado._id = params["id"];
        this.tratamientoEditado.anamnesis = params["anamnesis"];
        this.tratamientoEditado.diagnostico = params["diagnostico"];
        this.tratamientoEditado.tipoTratamiento = params["tipoTratamiento"];
        this.ready = true;
      } else {
        this.new = true;
      }
    });
  }

  guardar() {

  }

  checkFormIsFullfilled() {

  }

}
