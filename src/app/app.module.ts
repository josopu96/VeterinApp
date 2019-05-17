import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { BotonMenuComponent } from './components/boton-menu/boton-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeleccionesComponent } from './components/selecciones/selecciones.component';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { DataManagement } from './services/dataManagement';
import { RestWS } from './services/restService';
import { ConfigService } from '../config/configService';
import { Utils } from './utilities/Utils';
import { ListaComponent as ListaUsuarios } from './components/clientes/lista/lista.component';
import { ListaComponent as ListaMascotas } from './components/mascotas/lista/lista.component';
import { ListaComponent as ListaVeterinarios } from './components/veterinarios/lista/lista.component';
import { GlobalService } from './services/globalService';
import { NumberComponent } from './components/home/number/number.component';
import { DotComponent } from './components/home/dot/dot.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { AppDataComponent } from './components/app-data/app-data.component';
import { FormVeterinarioComponent } from './components/veterinarios/form-veterinario/form-veterinario.component';
import { FormMascotasComponent } from './components/mascotas/form-mascotas/form-mascotas.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    SeleccionComponent,
    BotonMenuComponent,
    MenuComponent,
    SeleccionesComponent,
    LoginComponent,
    ListaUsuarios,
    ListaMascotas,
    ListaVeterinarios,
    NumberComponent,
    DotComponent,
    AjustesComponent,
    AppDataComponent,
    FormVeterinarioComponent,
    FormMascotasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ElectronService,
    CookieService,
    DataManagement,
    RestWS,
    ConfigService,
    Utils,
    GlobalService
  ],
  bootstrap: [AppComponent],
},
)
export class AppModule { }
