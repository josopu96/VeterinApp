import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../app.dataModels';
import { DataManagement } from '../../services/dataManagement';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogged: Usuario = new Usuario();
  password: String = "";
  showSupport: Boolean;
  showError: Boolean;

  constructor(
    private dm: DataManagement,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.userLogged.email = "josed@gmail.com";
    this.password = "josed";
  }

  ngOnInit() {
  }

  sendLogin() {
    this.dm.login(this.userLogged.email, this.password).then((res) => {
      console.log("Login correcto");
      this.cookieService.set('token', res.id);
      this.router.navigateByUrl("");
    }).catch((err) => {
      this.showError = true;
      console.log(err);
    });
  }

}
