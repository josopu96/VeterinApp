import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../app.dataModels';
import { DataManagement } from '../../services/dataManagement';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogged: Usuario = new Usuario();
  password: String = "";

  constructor(
    private dm: DataManagement,
    private cookieService: CookieService,
  ) {
    this.userLogged.email = "josed@gmail.com";
    this.password = "josed";
  }

  ngOnInit() {
  }

  sendLogin() {
    console.log("Usuario introducido: " + this.userLogged.email + "\n contraseña: " + this.password);
    this.dm.login(this.userLogged.email, this.password).then((res) => {
      this.cookieService.set('token', res);
      console.log("Login correcto");
    }).catch((err) => {
      console.log(err);
    });
  }

}
