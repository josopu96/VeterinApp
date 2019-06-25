import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../../services/globalService';
import { CabeceraTabla, OperacionResumenMascota } from '../../../models/tablas';
import { Mascota, Cliente, Tratamiento } from '../../../app.dataModels';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  headElements: CabeceraTabla[] = [];
  tema: string = "_oscuro";
  elements: OperacionResumenMascota[] = [];

  ready: boolean = false;

  muestraSeccion: string = 'resumen';

  idMascota: string;
  mascota: Mascota = new Mascota();
  cliente: Cliente = new Cliente();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.inicializaCabecera();
    this.idMascota = this.route.snapshot.paramMap.get('idMascota');
    this.tema = "_" + this.globalService.getTema();
    if (this.idMascota) {
      this.mascota = this.globalService.getMascotaPorId(this.idMascota);
      console.log(this.elements);
      if (this.mascota) {
        this.inicializaElementosTabla();
        if (this.mascota.idCliente) {
          this.cliente = this.globalService.getClientePorId(this.mascota.idCliente);
        }
      } else {
        this.metodoDesarrollo();
      }
    }

    this.ready = true;
  }

  inicializaElementosTabla() {
    //Incluimos los tratamientos en el resumen de la mascota
    if (this.mascota.tratamientos) {
      this.mascota.tratamientos.forEach(tratamiento => {
        let element: OperacionResumenMascota = new OperacionResumenMascota;
        element.id = tratamiento._id;
        element.fecha = tratamiento.fecha;
        element.tipo = 'Tratamiento';
        element.descripcion = tratamiento.tipoTratamiento;
        this.elements.push(element);
      });
    }
    //Incluimos las vacunas en el resumen de la mascota
    if (this.mascota.vacunas) {
      this.mascota.vacunas.forEach(vacuna => {
        let element: OperacionResumenMascota = new OperacionResumenMascota;
        element.id = vacuna._id;
        element.fecha = vacuna.fecha;
        element.tipo = 'Vacuna';
        element.descripcion = vacuna.tipoVacuna;
        this.elements.push(element);
      });
    }
    //Incluimos las pruebas en el resumen de la mascota
    if (this.mascota.pruebas) {
      this.mascota.pruebas.forEach(prueba => {
        let element: OperacionResumenMascota = new OperacionResumenMascota;
        element.id = prueba._id;
        element.fecha = prueba.fecha;
        element.tipo = 'Prueba';
        element.descripcion = prueba.tipoPrueba;
        this.elements.push(element);
      });
    }
    //Incluimos las analíticas en el resumen de la mascota
    if (this.mascota.analiticas) {
      this.mascota.analiticas.forEach(analitica => {
        let element: OperacionResumenMascota = new OperacionResumenMascota;
        element.id = analitica._id;
        element.fecha = analitica.fecha;
        element.tipo = 'Analítica';
        element.descripcion = analitica.descripcion;
        this.elements.push(element);
      });
    }
    //Incluimos las desparasitaciones en el resumen de la mascota
    if (this.mascota.desparasitaciones) {
      this.mascota.desparasitaciones.forEach(desparasitacion => {
        let element: OperacionResumenMascota = new OperacionResumenMascota;
        element.id = desparasitacion._id;
        element.fecha = desparasitacion.fecha;
        element.tipo = 'Desparasitación';
        element.descripcion = desparasitacion.tipoDesparasitacion;
        this.elements.push(element);
      });
    }

    this.elements.sort((a, b): number => {
      if (a.fecha > b.fecha) return -1;
      if (a.fecha < b.fecha) return 1;
      return 0;
    })
  }

  inicializaCabecera() {
    let entrada1: CabeceraTabla = new CabeceraTabla();
    let entrada2: CabeceraTabla = new CabeceraTabla();
    let entrada3: CabeceraTabla = new CabeceraTabla();
    let entrada4: CabeceraTabla = new CabeceraTabla();
    entrada1.nombre = 'Fecha';
    entrada1.clase = 'cabeceraFecha';
    this.headElements.push(entrada1);
    entrada2.nombre = 'Tipo';
    entrada2.clase = 'cabeceraTipo';
    this.headElements.push(entrada2);
    entrada3.nombre = 'Concepto o descripción';
    entrada3.clase = 'cabeceraDescripcion';
    this.headElements.push(entrada3);
    entrada4.nombre = 'Ver';
    entrada4.clase = 'cabeceraVisualizar';
    this.headElements.push(entrada4);
  }

  metodoDesarrollo() {
    this.mascota = new Mascota();
    this.mascota.nombre = "Toby";
    this.cliente = new Cliente();
    this.cliente.nombre = "Luis Sergio";
    this.cliente.apellidos = "García de todos los Santos";
    for (let i = 0; i < 20; i++) {
      let operacion = new OperacionResumenMascota;
      operacion.id = "" + i;
      operacion.fecha = new Date();
      operacion.tipo = "tratamiento";
      operacion.descripcion = i + " Mg de Amoxicilina / 12 h";
      this.elements.push(operacion);
    }
  }

  irA(key) {
    switch (key) {
      case 'resumen':
        this.muestraSeccion = 'resumen';
        break;
      case 'analiticas':
        this.muestraSeccion = 'analiticas';
        break;
      case 'radiografias':
        this.muestraSeccion = 'radiografias';
        break;
      case 'pruebas':
        this.muestraSeccion = 'pruebas';
        break;
      case 'tratamientos':
        this.muestraSeccion = 'tratamientos';
        break;
      case 'vacunas':
        this.muestraSeccion = 'vacunas';
        break;
      case 'desparasitaciones':
        this.muestraSeccion = 'desparasitaciones';
        break;

      default:
        break;
    }
  }

}
