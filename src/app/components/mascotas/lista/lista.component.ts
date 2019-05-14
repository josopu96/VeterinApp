import { Component, OnInit } from '@angular/core';
import { DataManagement } from '../../../services/dataManagement';
import { GlobalService } from '../../../services/globalService';
import { Router } from '@angular/router';
import { Mascota } from '../../../app.dataModels';
import { FiltroMascota } from '../../../models/filtros';
import { CabeceraTabla } from '../../../models/tablas';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {


  
  headElements: CabeceraTabla[] = [];

  elements: Mascota[];
  tema = "_oscuro";

  mascotasTotales: Mascota[];

  time: Date = new Date();

  //Campos del formulario para filtrar
  filtroMascota: FiltroMascota;

  dataListNombreInicializado: Boolean;
  dataListChipInicializado: Boolean;
  dataListRazaInicializado: Boolean;
  dataListPeloInicializado: Boolean;
  dataListEspecieInicializado: Boolean;
  dataListSexoInicializado: Boolean;

  constructor(
    private dm: DataManagement,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.inicializaCabecera();
    this.filtroMascota = this.globalService.filtroMascota;
    this.elements = this.globalService.mascotas;
    this.tema = "_" + this.globalService.getTema();
    this.mascotasTotales = this.globalService.mascotas;
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
    entrada2.nombre = 'Fecha Nacimiento';
    entrada2.clase = 'cabeceraFecha';
    this.headElements.push(entrada2);
    entrada3.nombre = 'Chip';
    entrada3.clase = 'cabeceraChip';
    this.headElements.push(entrada3);
    entrada4.nombre = 'Visualizar';
    entrada4.clase = 'cabeceraVisualizar';
    this.headElements.push(entrada4);
    entrada5.nombre = 'Editar';
    entrada5.clase = 'cabeceraEditar';
    this.headElements.push(entrada5);
    entrada6.nombre = 'Seleccionar';
    entrada6.clase = 'cabeceraSeleccionar';
    this.headElements.push(entrada6);
  }

  onSelect(mascota: Mascota): void {
    this.globalService.setMascota(mascota);
    this.router.navigateByUrl('/seleccionaMascota', { skipLocationChange: true }).then(() =>
      this.router.navigate(["mascotas"]));
  }

  buscarPorNombre() {
    if (this.filtroMascota.nombre.length >= 1) {
      this.inicializaDataListNombre('nombres');
    } else {
      this.dataListNombreInicializado = false;
    }
    this.aplicarFiltros();
  }

  buscarPorChip() {
    if (this.filtroMascota.chip.length >= 1) {
      this.inicializaDataListChip('chips');
    } else {
      this.dataListChipInicializado = false;
    }
    this.aplicarFiltros();
  }

  buscarPorRaza() {
    if (this.filtroMascota.raza.length >= 1) {
      this.inicializaDataListRaza('razas');
    } else {
      this.dataListRazaInicializado = false;
    }
    this.aplicarFiltros();
  }

  buscarPorPelo() {
    if (this.filtroMascota.pelo.length >= 1) {
      this.inicializaDataListPelo('pelos');
    } else {
      this.dataListPeloInicializado = false;
    }
    this.aplicarFiltros();
  }

  buscarPorEspecie() {
    if (this.filtroMascota.especie.length >= 1) {
      this.inicializaDataListEspecie('especies');
    } else {
      this.dataListEspecieInicializado = false;
    }
    this.aplicarFiltros();
  }

  buscarPorSexo() {
    if (this.filtroMascota.sexo.length >= 1) {
      this.inicializaDataListSexo('sexos');
    } else {
      this.dataListSexoInicializado = false;
    }
    this.aplicarFiltros();
  }

  private aplicarFiltros() {

    this.elements = this.mascotasTotales.filter(mascota =>
      mascota.nombre.toLowerCase().includes(this.filtroMascota.nombre.toLowerCase()) &&
        mascota.chip.toLowerCase().includes(this.filtroMascota.chip.toLowerCase()) &&
        mascota.raza.toLowerCase().includes(this.filtroMascota.raza.toLowerCase()) &&
        mascota.pelo.toLowerCase().includes(this.filtroMascota.pelo.toLowerCase()) &&
        mascota.especie.toLowerCase().includes(this.filtroMascota.especie.toLowerCase()) &&
        mascota.sexo.toLowerCase().includes(this.filtroMascota.sexo.toLowerCase())

    );
    if (this.filtroMascota.porCliente) {
      //TODO
    }
    if (this.filtroMascota.atendidas) {
      this.elements = this.elements.filter(mascota =>
        this.time.setHours(0, 0, 0, 0) <= new Date(mascota.fecModificacion).setHours(0, 0, 0, 0) &&
        new Date(mascota.fecModificacion).setHours(0, 0, 0, 0) <= this.time.setHours(0, 0, 0, 0)
      );
    }
  }

  filtroAtendidas(){
    if(this.filtroMascota.atendidas){
      this.filtroMascota.atendidas = false;
      this.aplicarFiltros();
    } else {
      this.elements = this.elements.filter(mascota =>
        this.time.setHours(0, 0, 0, 0) <= new Date(mascota.fecModificacion).setHours(0, 0, 0, 0) &&
        new Date(mascota.fecModificacion).setHours(0, 0, 0, 0) <= this.time.setHours(0, 0, 0, 0)
      );
      this.filtroMascota.atendidas = true;
    }
  }

  borrarFiltros() {
    this.globalService.inicializaFiltroMascota();
    this.filtroMascota = this.globalService.filtroMascota;
    this.dataListNombreInicializado = false;
    this.dataListChipInicializado = false;
    this.dataListEspecieInicializado = false;
    this.dataListPeloInicializado = false;
    this.dataListRazaInicializado = false;
    this.dataListSexoInicializado = false;
    this.aplicarFiltros();

  }

  //Inicializar dataList
  

  inicializaDataListNombre(nombreDataList: string) {
    if (!this.dataListNombreInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let mascota of this.mascotasTotales) {
          if (!lista.includes(mascota.nombre)) {
            lista.push(mascota.nombre);
            option = document.createElement('option');
            option.value = mascota.nombre;
            dataList.appendChild(option);
          }
        }
        console.log(dataList);
        this.dataListNombreInicializado = true;
      }
    }
  }

  inicializaDataListChip(nombreDataList: string) {
    if (!this.dataListChipInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let mascota of this.mascotasTotales) {
          if (!lista.includes(mascota.chip)) {
            lista.push(mascota.chip);
            option = document.createElement('option');
            option.value = mascota.chip;
            dataList.appendChild(option);
          }
        }
        console.log(dataList);
        this.dataListChipInicializado = true;
      }
    }
  }
  
  inicializaDataListRaza(nombreDataList: string) {
    if (!this.dataListRazaInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let mascota of this.mascotasTotales) {
          if (!lista.includes(mascota.raza)) {
            lista.push(mascota.raza);
            option = document.createElement('option');
            option.value = mascota.raza;
            dataList.appendChild(option);
          }
        }
        console.log(dataList);
        this.dataListRazaInicializado = true;
      }
    }
  }

  inicializaDataListPelo(nombreDataList: string) {
    if (!this.dataListPeloInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let mascota of this.mascotasTotales) {
          if (!lista.includes(mascota.pelo)) {
            lista.push(mascota.pelo);
            option = document.createElement('option');
            option.value = mascota.pelo;
            dataList.appendChild(option);
          }
        }
        console.log(dataList);
        this.dataListPeloInicializado = true;
      }
    }
  }

  inicializaDataListEspecie(nombreDataList: string) {
    if (!this.dataListEspecieInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let mascota of this.mascotasTotales) {
          if (!lista.includes(mascota.especie)) {
            lista.push(mascota.especie);
            option = document.createElement('option');
            option.value = mascota.especie;
            dataList.appendChild(option);
          }
        }
        console.log(dataList);
        this.dataListEspecieInicializado = true;
      }
    }
  }

  inicializaDataListSexo(nombreDataList: string) {
    if (!this.dataListSexoInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let mascota of this.mascotasTotales) {
          if (!lista.includes(mascota.sexo)) {
            lista.push(mascota.sexo);
            option = document.createElement('option');
            option.value = mascota.sexo;
            dataList.appendChild(option);
          }
        }
        console.log(dataList);
        this.dataListSexoInicializado = true;
      }
    }
  }
}
