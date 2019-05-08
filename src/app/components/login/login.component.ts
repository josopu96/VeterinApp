import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../app.dataModels';
import { DataManagement } from '../../services/dataManagement';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/globalService';
import { Global } from '../../models/bundle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;
  showError: Boolean;
  rememberPass: Boolean;

  constructor(
    private dm: DataManagement,
    private cookieService: CookieService,
    private router: Router,
    private globalService: GlobalService
  ) {
  }

  ngOnInit() {
    //Esta es la única pantalla que tendrá siempre el mismo tema de colores. Ya que no disponemos aun de los ajustes de usuario.
    this.dm.getGlobalLogin().then((res: Global) => {
      this.rememberPass = res.recordarPass;
      if (this.rememberPass === true) {
        this.dm.getUserByToken(res.usuarioId).then((usr) => {
          this.email = usr.email;
          this.password = usr.clave;
        });
      }
    });
  }

  sendLogin() {
    this.dm.login(this.email, this.password).then((res: Usuario) => {
      console.log("Login correcto");
      this.doRememberPass(res._id);
      this.cookieService.set('token', res._id);
      this.globalService.setUsuario(res);
      this.router.navigateByUrl("");
    }).catch((err) => {
      this.showError = true;
      console.log(err);
    });
  }

  doRememberPass(userId: string) {
    this.dm.updateGlobalLogin(userId, String(this.rememberPass)).then((_) => {

    }).catch((err) => {
      console.log(err);
    });
  }
}
