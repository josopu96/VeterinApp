import { Component, OnInit } from '@angular/core';
import { DataManagement } from '../../services/dataManagement';
import { GlobalService } from '../../services/globalService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {

  tema = "_oscuro";

  constructor(
    private dm: DataManagement,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
  }

}
