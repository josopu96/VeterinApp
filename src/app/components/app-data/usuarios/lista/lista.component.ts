import { Component, OnInit } from '@angular/core';
import { CabeceraTabla } from '../../../../models/tablas';
import { Usuario } from '../../../../app.dataModels';
import { GlobalService } from '../../../../services/globalService';
import { Router } from '@angular/router';
import { FiltroUsuario } from '../../../../models/filtros';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  headElements: CabeceraTabla[] = [];

  elements: Usuario[];
  tema = "_oscuro";
  usuariosTotales: Usuario[];

  filtroUsuario: FiltroUsuario;

  dataListNombreInicializado: Boolean;
  dataListApellidosInicializado: Boolean;
  dataListDniInicializado: Boolean;

  constructor(
    private globalService: GlobalService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.inicializaCabecera();
    this.filtroUsuario = this.globalService.filtroUsuario;
    this.elements = this.globalService.usuarios;
    this.usuariosTotales = this.globalService.usuarios;
    this.tema = "_" + this.globalService.getTema();
    this.aplicarFiltros();
  }

  inicializaCabecera() {
    let entrada1: CabeceraTabla = new CabeceraTabla();
    let entrada2: CabeceraTabla = new CabeceraTabla();
    entrada1.nombre = 'Nombre de usuario';
    entrada1.clase = 'cabeceraNombre';
    this.headElements.push(entrada1);
    entrada2.nombre = 'Administrador';
    entrada2.clase = 'cabeceraApellidos';
    this.headElements.push(entrada2);
  }

  onSelect(veterinario: Usuario): void {

  }

  editar(veterinario: Usuario) {
    let params = {
        'id': veterinario._id,
        'nombre': veterinario.nombre,
        'email': veterinario.email,
        'isAdmin': veterinario.isAdmin
      };
    this.router.navigate(['formUsuario', params]);
  }

  borrar(id: string) {

  }

  buscarPorNombre() {
    if (this.filtroUsuario.nombre.length >= 1) {
      this.inicializaDataListNombre('dataListNombre');
    } else {
      this.dataListNombreInicializado = false;
    }
    this.aplicarFiltros();
  }

  borrarFiltros() {
    this.globalService.inicializaFiltroUsuario();
    this.filtroUsuario = this.globalService.filtroUsuario;

    this.dataListNombreInicializado = false;
    this.aplicarFiltros();
  }

  private aplicarFiltros() {
    this.elements = this.usuariosTotales.filter(usuario =>
      usuario.nombre.toLowerCase().includes(this.filtroUsuario.nombre.toLowerCase())
    );
  }

  //Inicializar dataList

  inicializaDataListNombre(nombreDataList: string) {
    if (!this.dataListNombreInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let veterinario of this.usuariosTotales) {
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
}
