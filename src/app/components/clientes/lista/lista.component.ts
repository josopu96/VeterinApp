import { Component, OnInit } from '@angular/core';
import { DataManagement } from '../../../services/dataManagement';
import { GlobalService } from '../../../services/globalService';
import { Cliente, Contacto } from '../../../app.dataModels';
import { Router } from '@angular/router';
import { FiltroCliente } from '../../../models/filtros';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  headElements = ['Nombre', 'Apellidos', 'DNI', 'Teléfono', 'Visualizar', 'Editar', 'Seleccionar'];

  elements: Cliente[];
  tema = "_oscuro";
  clientesTotales: Cliente[];

  time: Date = new Date();

  //Campos del formulario para filtrar
  filtroCliente: FiltroCliente;


  constructor(
    private dm: DataManagement,
    private globalService: GlobalService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.filtroCliente = this.globalService.filtroCliente;
    this.elements = this.globalService.clientes;
    this.clientesTotales = this.globalService.clientes;
    this.tema = "_" + this.globalService.getTema();
    this.aplicarFiltros();
  }

  onSelect(cliente: Cliente): void {
    this.globalService.setCliente(cliente);
    this.router.navigateByUrl('/seleccionaCliente', { skipLocationChange: true }).then(() =>
      this.router.navigate(["clientes"]));
  }

  buscar() {
    this.aplicarFiltros();
  }

  filtroMorosos() {
    if (this.filtroCliente.morosos) {
      this.filtroCliente.morosos = false;
      this.aplicarFiltros();
    } else {
      this.elements = this.elements.filter(cliente => this.getClientesMorosos().includes(cliente));
      this.filtroCliente.morosos = true;
    }
  }

  filtroAtendidos(){
    if(this.filtroCliente.atendidos){
      this.filtroCliente.atendidos = false;
      this.aplicarFiltros();
    } else {
      this.elements = this.elements.filter(cliente =>
        this.time.setHours(0, 0, 0, 0) <= new Date(cliente.fecModificacion).setHours(0, 0, 0, 0) &&
        new Date(cliente.fecModificacion).setHours(0, 0, 0, 0) <= this.time.setHours(0, 0, 0, 0)
      );
      this.filtroCliente.atendidos = true;
    }
  }

  borrarFiltros(){
    this.globalService.inicializaFiltroCliente();
    this.filtroCliente = this.globalService.filtroCliente;
    this.aplicarFiltros();

  }

  private getClientesMorosos() {
    return this.elements.filter(cliente =>
      cliente.facturas.includes(cliente.facturas.filter(factura => factura.estado.toLowerCase() == 'impagado')[0])
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
      this.elements = this.elements.filter(cliente => this.getClientesMorosos().includes(cliente));
    }
    if (this.filtroCliente.citados) {
      //TODO: Incluir filtro cuando esté desarrollado el calendario
    }
    if (this.filtroCliente.porMascota) {
      //TODO: Incluir filtro por mascota (es posible que haya que modificar los selectores para que modifiquen esta variable también)
    }
    if (this.filtroCliente.atendidos) {
      this.elements = this.elements.filter(cliente =>
          this.time.setHours(0, 0, 0, 0) <= new Date(cliente.fecModificacion).setHours(0, 0, 0, 0) &&
          new Date(cliente.fecModificacion).setHours(0, 0, 0, 0) <= this.time.setHours(0, 0, 0, 0)
      );
    }
  }
}
