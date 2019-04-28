import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListaComponent } from './components/clientes/lista/lista.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'clientes' , component: ListaComponent },
    { path: 'seleccionaCliente' , component: SeleccionComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
