import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/globalService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  tema = "_oscuro";

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
  }

}
