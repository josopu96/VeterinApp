import { Component, OnInit } from '@angular/core';
import { DataManagement } from '../../../services/dataManagement';
import { GlobalService } from '../../../services/globalService';
import { Cliente, Contacto, Mascota, Cuidado } from '../../../app.dataModels';
import { Router } from '@angular/router';
import { FiltroCliente } from '../../../models/filtros';
import { CabeceraTabla } from '../../../models/tablas';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  headElements: CabeceraTabla[] = [];

  elements: Cliente[];
  tema = "_oscuro";
  clientesTotales: Cliente[];

  //Selecciones
  clienteSeleccionado: Cliente;
  mascotaSeleccionada: Mascota;

  time: Date = new Date();

  //Campos del formulario para filtrar
  filtroCliente: FiltroCliente;

  dataListNombreInicializado: Boolean;
  dataListApellidosInicializado: Boolean;
  dataListDniInicializado: Boolean;
  dataListTelefonoInicializado: Boolean;

  constructor(
    private globalService: GlobalService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.inicializaCabecera();
    this.clienteSeleccionado = this.globalService.cliente;
    this.mascotaSeleccionada = this.globalService.mascota;
    this.filtroCliente = this.globalService.filtroCliente;
    this.elements = this.globalService.clientes;
    this.clientesTotales = this.globalService.clientes;
    this.tema = "_" + this.globalService.getTema();
    this.aplicarFiltros();
  }

  inicializaCabecera() {
    let entrada1: CabeceraTabla = new CabeceraTabla();
    let entrada2: CabeceraTabla = new CabeceraTabla();
    let entrada3: CabeceraTabla = new CabeceraTabla();
    let entrada4: CabeceraTabla = new CabeceraTabla();
    let entrada5: CabeceraTabla = new CabeceraTabla();
    let entrada6: CabeceraTabla = new CabeceraTabla();
    let entrada7: CabeceraTabla = new CabeceraTabla();
    entrada1.nombre = 'Nombre';
    entrada1.clase = 'cabeceraNombre';
    this.headElements.push(entrada1);
    entrada2.nombre = 'Apellidos';
    entrada2.clase = 'cabeceraApellidos';
    this.headElements.push(entrada2);
    entrada3.nombre = 'DNI';
    entrada3.clase = 'cabeceraDNI';
    this.headElements.push(entrada3);
    entrada4.nombre = 'Teléfono';
    entrada4.clase = 'cabeceraTelefono';
    this.headElements.push(entrada4);
    entrada5.nombre = 'Ver';
    entrada5.clase = 'cabeceraVisualizar';
    this.headElements.push(entrada5);
    entrada6.nombre = 'Editar';
    entrada6.clase = 'cabeceraEditar';
    this.headElements.push(entrada6);
    entrada7.nombre = 'Elegir';
    entrada7.clase = 'cabeceraSeleccionar';
    this.headElements.push(entrada7);
  }

  onSelect(cliente: Cliente): void {
    this.globalService.setCliente(cliente);
    this.globalService.filtroMascota.porCliente = true;
    this.globalService.limpiarMascota();
    this.router.navigateByUrl('/seleccionaCliente', { skipLocationChange: true }).then(() =>
      this.router.navigate(["clientes"]));
  }

  limpiarCliente(): void {
    this.globalService.limpiarCliente();
    this.router.navigateByUrl('/seleccionaCliente', { skipLocationChange: true }).then(() =>
      this.router.navigate(["clientes"]));
  }

  buscarPorNombre() {
    if (this.filtroCliente.nombre.length >= 1) {
      this.inicializaDataListNombre('dataListNombre');
    } else {
      this.dataListNombreInicializado = false;
    }
    this.aplicarFiltros();
  }

  buscarPorApellidos() {
    if (this.filtroCliente.apellidos.length >= 1) {
      this.inicializaDataListApellidos('dataListApellidos');
    } else {
      this.dataListApellidosInicializado = false;
    }
    this.aplicarFiltros();
  }

  buscarPorDni() {
    if (this.filtroCliente.dni.length >= 1) {
      this.inicializaDataListDni('dataListDni');
    } else {
      this.dataListDniInicializado = false;
    }
    this.aplicarFiltros();
  }

  buscarPorTelefono() {
    if (this.filtroCliente.telefono.length >= 1) {
      this.inicializaDataListTelefono('dataListTelefono');
    } else {
      this.dataListTelefonoInicializado = false;
    }
    this.aplicarFiltros();
  }

  filtroMorosos() {
    if (this.filtroCliente.morosos) {
      this.filtroCliente.morosos = false;
      this.aplicarFiltros();
    } else {
      this.elements = this.getClientesMorosos();
      this.filtroCliente.morosos = true;
    }
  }

  filtroAtendidos() {
    if (this.filtroCliente.atendidos) {
      this.filtroCliente.atendidos = false;
      this.aplicarFiltros();
    } else {
      this.elements = this.getClientesAtendidos();
      this.filtroCliente.atendidos = true;
    }
  }

  filtroMascota(){
    if (this.filtroCliente.porMascota) {
      this.filtroCliente.porMascota = false;
      this.aplicarFiltros();
    } else {
      this.elements = this.getClientesPorMascota();
      this.filtroCliente.porMascota = true;
    }
  }

  borrarFiltros() {
    this.globalService.inicializaFiltroCliente();
    this.filtroCliente = this.globalService.filtroCliente;

    this.dataListNombreInicializado = false;
    this.dataListApellidosInicializado = false;
    this.dataListDniInicializado = false;
    this.dataListTelefonoInicializado = false;
    this.aplicarFiltros();

  }

  private getClientesMorosos() {
    return this.elements.filter(cliente =>
      cliente.facturas.includes(cliente.facturas.filter(factura => factura.estado.toLowerCase() == 'impagado')[0])
    );
  }

  private getClientesPorMascota() {
    return this.elements.filter(cliente => 
      cliente.cuidados.includes(cliente.cuidados.filter(cuidado => cuidado.idMascota == this.mascotaSeleccionada._id)[0])
    );
  }

  private getClientesAtendidos() {
    return this.elements.filter(cliente =>
      this.time.setHours(0, 0, 0, 0) <= new Date(cliente.fecModificacion).setHours(0, 0, 0, 0) &&
      new Date(cliente.fecModificacion).setHours(0, 0, 0, 0) <= this.time.setHours(0, 0, 0, 0)
    );
  }

  private aplicarFiltros() {
    this.elements = this.clientesTotales.filter(cliente =>
      cliente.nombre.toLowerCase().includes(this.filtroCliente.nombre.toLowerCase()) &&
      cliente.apellidos.toLowerCase().includes(this.filtroCliente.apellidos.toLowerCase()) &&
      cliente.dni.toLowerCase().includes(this.filtroCliente.dni.toLowerCase()) &&
      (
        this.filtroCliente.telefono == '' ? true : cliente.contactos.includes(cliente.contactos.filter(contacto => contacto.telefono.toLowerCase().includes(this.filtroCliente.telefono.toLowerCase()))[0])
      )
    );
    if (this.filtroCliente.morosos) {
      this.elements = this.getClientesMorosos();
    }
    if (this.filtroCliente.citados) {
      //TODO: Incluir filtro cuando esté desarrollado el calendario
    }
    if (this.filtroCliente.porMascota) {
      this.elements = this.getClientesPorMascota();
    }
    if (this.filtroCliente.atendidos) {
      this.elements = this.getClientesAtendidos();
    }
  }


  //Inicializar dataList


  inicializaDataListNombre(nombreDataList: string) {
    if (!this.dataListNombreInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let cliente of this.clientesTotales) {
          if (!lista.includes(cliente.nombre)) {
            lista.push(cliente.nombre);
            option = document.createElement('option');
            option.value = cliente.nombre;
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
        for (let cliente of this.clientesTotales) {
          if (!lista.includes(cliente.apellidos)) {
            lista.push(cliente.apellidos);
            option = document.createElement('option');
            option.value = cliente.apellidos;
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
        for (let cliente of this.clientesTotales) {
          if (!lista.includes(cliente.dni)) {
            lista.push(cliente.dni);
            option = document.createElement('option');
            option.value = cliente.dni;
            dataList.appendChild(option);
          }
        }
        this.dataListDniInicializado = true;
      }
    }
  }
  inicializaDataListTelefono(nombreDataList: string) {
    if (!this.dataListTelefonoInicializado) {

      let dataList = document.getElementById(nombreDataList);
      if (dataList) {
        let lista: string[] = [];
        let option;
        for (let cliente of this.clientesTotales) {
          for (let contacto of cliente.contactos) {
            if (!lista.includes(contacto.telefono)) {
              lista.push(contacto.telefono);
              option = document.createElement('option');
              option.value = contacto.telefono;
              dataList.appendChild(option);
            }
          }
        }
        this.dataListTelefonoInicializado = true;
      }
    }
  }
}
