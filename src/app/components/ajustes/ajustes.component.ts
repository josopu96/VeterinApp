import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/globalService';
import { Router } from '@angular/router';
import { DataManagement } from '../../services/dataManagement';
import { CookieService } from 'ngx-cookie-service';
import { Ajustes } from '../../app.dataModels';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss']
})
export class AjustesComponent implements OnInit {

  tema: string = "_oscuro";
  ajustes: Ajustes;
  token: string;

  constructor(
    private globalService: GlobalService,
    private dm: DataManagement,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tema = "_"+this.globalService.getTema();
  }

  cambiarTema(tema: string){
      this.ajustes = this.globalService.cambiarTema(tema);
      this.token = this.cookieService.get('token');
      this.dm.updateAjustes(this.ajustes, this.token).then(res => {
        console.log(res);
      }).catch((err) => {
        console.error(err);
      });

      this.router.navigateByUrl('seleccionaCliente', {skipLocationChange: true}).then(()=>
      this.router.navigate(["ajustes"])); 
  }

  cerrarSesion(){
      this.ajustes = this.globalService.cerrarSesion();
      this.router.navigate(["login"]); 
  }

}
