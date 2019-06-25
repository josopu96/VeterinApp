import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/globalService';
import { Router, NavigationExtras } from '@angular/router';
import { Veterinario } from '../../../../app.dataModels';
import { FiltroVeterinario } from '../../../../models/filtros';
import { CabeceraTabla } from '../../../../models/tablas';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  headElements: CabeceraTabla[] = [];

  elements: Veterinario[];
  tema = "_oscuro";
  veterinariosTotales: Veterinario[];

  //Selección
  veterinarioSeleccionado: Veterinario;

  //Campos del formulario para filtrar
  filtroVeterinario: FiltroVeterinario;

  dataListNombreInicializado: Boolean;
  dataListApellidosInicializado: Boolean;
  dataListDniInicializado: Boolean;

  constructor(
    private globalService: GlobalService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.inicializaCabecera();
    this.veterinarioSeleccionado = this.globalService.veterinario;
    this.filtroVeterinario = this.globalService.filtroVeterinario;
    this.elements = this.globalService.veterinarios;
    this.veterinariosTotales = this.globalService.veterinarios;
    this.tema = "_" + this.globalService.getTema();
    this.aplicarFiltros();
  }

  inicializaCabecera(){
    let entrada1: CabeceraTabla = new CabeceraTabla();
    let entrada2: CabeceraTabla = new CabeceraTabla();
    let entrada3: CabeceraTabla = new CabeceraTabla();
    let entrada4: CabeceraTabla = new CabeceraTabla();
    let entrada5: CabeceraTabla = new CabeceraTabla();
    let entrada6: CabeceraTabla = new CabeceraTabla();
    entrada1.nombre = 'Nombre';
    entrada1.clase = 'cabeceraNombre';
    this.headElements.push(entrada1);
    entrada2.nombre = 'Apellidos';
    entrada2.clase = 'cabeceraApellidos';
    this.headElements.push(entrada2);
    entrada3.nombre = 'DNI';
    entrada3.clase = 'cabeceraDNI';
    this.headElements.push(entrada3);
    entrada4.nombre = 'Ver';
    entrada4.clase = 'cabeceraVisualizar';
    this.headElements.push(entrada4);
    entrada5.nombre = 'Editar';
    entrada5.clase = 'cabeceraEditar';
    this.headElements.push(entrada5);
    entrada6.nombre = 'Elegir';
    entrada6.clase = 'cabeceraSeleccionar';
    this.headElements.push(entrada6);
  }

  onSelect(veterinario: Veterinario): void {
    this.globalService.setVeterinario(veterinario);
    this.router.navigateByUrl('/seleccionaVeterinario', { skipLocationChange: true }).then(() =>
      this.router.navigate(["veterinarios"]));
  }
  limpiarVeterinario():void{
      this.globalService.limpiarVeterinario();
      this.router.navigateByUrl('/seleccionaVeterinario', {skipLocationChange: true}).then(()=>
      this.router.navigate(["veterinarios"]));
  }

  editar(veterinario: Veterinario) {
    let params = {
        'id': veterinario._id,
        'nombre': veterinario.nombre,
        'apellidos': veterinario.apellidos,
        'fecNac': veterinario.fecNac,
        'dni': veterinario.dni,
        'telefono': veterinario.telefono,
        'numColegiado': veterinario.numColegiado
      };
    this.router.navigate(['formVeterinario', params]);
  }

  borrar(id: string) {

  }

  buscarPorNombre() {
    if (this.filtroVeterinario.nombre.length >= 1) {
      this.inicializaDataListNombre('dataListNombre');
    } else {
      this.dataListNombreInicializado = false;
    }
    this.aplicarFiltros();
  }
  buscarPorApellidos() {
    if (this.filtroVeterinario.apellidos.length >= 1) {
      this.inicializaDataListApellidos('dataListApellidos');
    } else {
      this.dataListApellidosInicializado = false;
    }
    this.aplicarFiltros();
  }
  buscarPorDni() {
    if (this.filtroVeterinario.dni.length >= 1) {
      this.inicializaDataListDni('dataListDni');
    } else {
      this.dataListDniInicializado = false;
    }
    this.aplicarFiltros();
  }

  borrarFiltros(){
    this.globalService.inicializaFiltroVeterinario();
    this.filtroVeterinario = this.globalService.filtroVeterinario;

    this.dataListNombreInicializado = false;
    this.dataListApellidosInicializado = false;
    this.dataListDniInicializado = false;
    this.aplicarFiltros();
  }

  private aplicarFiltros() {
    this.elements = this.veterinariosTotales.filter(veterinario =>
      veterinario.nombre.toLowerCase().includes(this.filtroVeterinario.nombre.toLowerCase()) &&
      veterinario.apellidos.toLowerCase().includes(this.filtroVeterinario.apellidos.toLowerCase()) &&
      veterinario.dni.toLowerCase().includes(this.filtroVeterinario.dni.toLowerCase())
    );
  }

  //Inicializar dataList

  inicializaDataListNombre(nombreDataList: string) {
    if (!this.dataListNombreInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let veterinario of this.veterinariosTotales) {
          if (!lista.includes(veterinario.nombre)) {
            lista.push(veterinario.nombre);
            option = document.createElement('option');
            option.value = veterinario.nombre;
            dataList.appendChild(option);
          }
        }
        this.dataListNombreInicializado = true;
      }
    }
  }
  inicializaDataListApellidos(nombreDataList: string) {
    if (!this.dataListApellidosInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let veterinario of this.veterinariosTotales) {
          if (!lista.includes(veterinario.apellidos)) {
            lista.push(veterinario.apellidos);
            option = document.createElement('option');
            option.value = veterinario.apellidos;
            dataList.appendChild(option);
          }
        }
        this.dataListApellidosInicializado = true;
      }
    }
  }
  inicializaDataListDni(nombreDataList: string) {
    if (!this.dataListDniInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let veterinario of this.veterinariosTotales) {
          if (!lista.includes(veterinario.dni)) {
            lista.push(veterinario.dni);
            option = document.createElement('option');
            option.value = veterinario.dni;
            dataList.appendChild(option);
          }
        }
        this.dataListDniInicializado = true;
      }
    }
  }

  visualizar(el: Veterinario) {
    this.cookieService.set('veterinarioDisplay', JSON.stringify(el));
    this.globalService.generaVentana(250, 350, '/displayVeterinario', null);
  }
}
