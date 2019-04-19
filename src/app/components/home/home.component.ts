import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) {
    const token = this.cookieService.get("token");
    const isUserLogged = token ? true : false;

    if (!isUserLogged) {
      this.router.navigateByUrl("/login");
    }
  }

  ngOnInit() {
  }

}
