import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../app.dataModels';
import { DataManagement } from '../../services/dataManagement';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/globalService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: String = "josed@gmail.com";
  password: String = "josed";
  showSupport: Boolean;
  showError: Boolean;

  constructor(
    private dm: DataManagement,
    private cookieService: CookieService,
    private router: Router,
    private globalService: GlobalService
  ) {
  }

  ngOnInit() {
  }

  sendLogin() {
    this.dm.login(this.email, this.password).then((res:Usuario) => {
      console.log("Login correcto");
      this.cookieService.set('token', res.id);
      this.globalService.setUsuario(res);
      this.router.navigateByUrl("");
    }).catch((err) => {
      this.showError = true;
      console.log(err);
    });
  }

}
