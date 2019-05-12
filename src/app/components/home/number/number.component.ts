import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/globalService';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {

  tema: string = "_oscuro";

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.tema = "_"+this.globalService.getTema();
  }

}
