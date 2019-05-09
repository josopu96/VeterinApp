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

  tema = "_claro";

  constructor(
    private dm: DataManagement,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
  }

}
