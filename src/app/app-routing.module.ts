import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListaComponent as ListaUsuarios } from './components/clientes/lista/lista.component';
import { ListaComponent as ListaMascotas } from './components/mascotas/lista/lista.component';
import { ListaComponent as ListaVeterinarios } from './components/veterinarios/lista/lista.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { AppDataComponent } from './components/app-data/app-data.component';
import { FormVeterinarioComponent } from './components/veterinarios/form-veterinario/form-veterinario.component';
import { FormMascotasComponent } from './components/mascotas/form-mascotas/form-mascotas.component';
import { AvisoNuevaMascotaComponent } from './components/mascotas/aviso-nueva-mascota/aviso-nueva-mascota.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'clientes' , component: ListaUsuarios },
    { path: 'mascotas' , component: ListaMascotas },
    { path: 'seleccionaCliente' , component: SeleccionComponent },
    { path: 'seleccionaMascota' , component: SeleccionComponent },
    { path: 'seleccionaVeterinario' , component: SeleccionComponent },
    { path: 'ajustes' , component: AjustesComponent },
    { path: 'appData' , component: AppDataComponent },
    { path: 'veterinarios' , component: ListaVeterinarios },
    { path: 'formVeterinario' , component: FormVeterinarioComponent },
    { path: 'formMascotas' , component: FormMascotasComponent },
    { path: 'avisoNuevaMascota' , component: AvisoNuevaMascotaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
})
export class AppRoutingModule { }
