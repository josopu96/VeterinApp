import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListaComponent as ListaUsuarios } from './components/clientes/lista/lista.component';
import { ListaComponent as ListaMascotas } from './components/mascotas/lista/lista.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { AppDataComponent } from './components/app-data/app-data.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'clientes' , component: ListaUsuarios },
    { path: 'mascotas' , component: ListaMascotas },
    { path: 'seleccionaCliente' , component: SeleccionComponent },
    { path: 'seleccionaMascota' , component: SeleccionComponent },
    { path: 'ajustes' , component: AjustesComponent },
    { path: 'appData' , component: AppDataComponent }


];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
