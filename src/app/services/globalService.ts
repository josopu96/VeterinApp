import { Injectable, NgZone } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataManagement } from '../services/dataManagement';
import { Ajustes, Usuario, Mascota, Veterinario, Cliente, Clinica } from '../app.dataModels';
import { FiltroCliente, FiltroMascota, FiltroVeterinario, FiltroUsuario } from '../models/filtros';
import { remote, ipcRenderer, webContents } from 'electron';
import { Router } from '@angular/router';

@Injectable()
export class GlobalService {

  //Variables de sesión
  usuario: Usuario;
  token: string;
  ajustes: Ajustes;

  //Variables de interacción
  clinica: Clinica;
  cliente: Cliente;
  veterinario: Veterinario;
  mascota: Mascota;
  clientes: Cliente[];
  mascotas: Mascota[];
  veterinarios: Veterinario[];
  usuarios: Usuario[];

  //Especiales
  clienteEspecial: Cliente;

  //Variables de filtros
  filtroCliente: FiltroCliente;
  filtroMascota: FiltroMascota;
  filtroVeterinario: FiltroVeterinario;
  filtroUsuario: FiltroUsuario;

  constructor(
    private coockieService: CookieService,
    private dm: DataManagement,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.initialize();
  }

  private initialize() {

    //Inicializamos el cliente, el veterinario y la mascota con id=0
    this.cliente = new Cliente();
    this.cliente._id = "0";
    this.veterinario = new Veterinario();
    this.veterinario._id = "0";
    this.mascota = new Mascota();
    this.mascota._id = "0";

    //Comprobamos si disponemos de token, en caso positivo, guardamos el usuario perteneciente al token.
    this.token = this.coockieService.get("token");
    if (this.token == "undefined") {
      //Este método se ha realizado para el entorno de desarrollo, donde en ocasiones se pierde el token al guardar cambios en caliente.
      this.metodoParaDesarrollo();
    } else if (this.token) {
      this.getUsuarioPorToken();
    }

    //Inicializamos los filtros
    this.inicializaFiltroCliente();
    this.inicializaFiltroMascota();
    this.inicializaFiltroVeterinario();
    this.inicializaFiltroUsuario();

    //Inicializamos las colecciones que usaremos más adelante en la aplicación.
    this.getClientes();
    this.getMascotas();
    this.getVeterinarios();
    this.getClinica();
    this.getCalendario();
    this.getTarifas();
    this.getUsuarios();
  }

  private getClientes() {
    this.clientes = [];
    this.dm.getClients().then((clientes: Cliente[]) => {
      this.clientes = clientes;
      let index = this.clientes.indexOf(
        this.clientes.find(x => x._id === "100000000000000000000000")
      );
      this.clienteEspecial = this.clientes[index];
      this.clientes.splice(index, 1);
    }).catch((err) => {
      console.error(err);
    });
  }

  public getMascotas() {
    this.mascotas = [];
    this.dm.getMascotas().then((mascotas: Mascota[]) => {
      this.mascotas = mascotas;
    }).catch((err) => {
      console.error(err);
    });
  }

  public getVeterinarios() {
    this.dm.getVeterinarios().then((veterinarios: Veterinario[]) => {
      this.veterinarios = veterinarios;
    }).catch((err) => {
      console.error(err);
    });
  }

  private getClinica() {
    //TODO
    this.clinica = new Clinica();
    this.veterinarios = [];
  }

  private getCalendario() {
    //TODO
  }

  private getTarifas() {
    //TODO
  }

  private getUsuarios() {
    this.dm.getUsuarios().then((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    }).catch((err) => {
      console.error(err);
    });
  }

  // --- CLIENTE ---

  setCliente(nuevoCliente: Cliente) {
    this.cliente = nuevoCliente;
  }

  getCliente() {
    return this.cliente;
  }

  // --- VETERINARIO ---

  setVeterinario(nuevoVeterinario: Veterinario) {
    this.veterinario = nuevoVeterinario;
  }

  getVeterinario() {
    return this.veterinario;
  }

  // --- MASCOTA ---

  setMascota(nuevaMascota: Mascota) {
    this.mascota = nuevaMascota;
  }

  getMascota() {
    return this.mascota;
  }

  // --- SELECTORES ---

  limpiarCliente() {
    this.limpiarMascota();
    this.filtroMascota.porCliente = false;
    this.cliente = new Cliente();
    this.cliente._id = "0";
    return this.cliente;
  }

  limpiarMascota() {
    this.mascota = new Mascota();
    this.filtroCliente.porMascota = false;
    this.mascota._id = "0";
    return this.mascota;
  }

  limpiarVeterinario() {
    this.veterinario = new Veterinario();
    this.veterinario._id = "0";
    return this.veterinario;
  }

  // --- USUARIO ---

  getUsuario() {
    return this.usuario;
  }

  getUsuarioPorToken() {
    this.dm.getUserByToken(this.token).then((res: Usuario) => {
      this.setUsuario(res);
      this.coockieService.set("token", res._id);
    });
  }

  setUsuario(user: Usuario) {
    this.usuario = new Usuario();
    this.ajustes = new Ajustes();
    this.ajustes = user.ajustes;
    this.usuario = user;

  }

  getTema() {
    if (this.getUsuario()) {
      if (this.ajustes) {
        return this.getUsuario().ajustes.tema;
      } else {
        return "oscuro";
      }
    } else {
      return "oscuro";
    }
  }

  cambiarTema(tema: string) {
    if (this.getUsuario()) {
      this.ajustes.tema = tema;
      this.usuario.ajustes = this.ajustes;
    }
    return this.ajustes;
  }

  cerrarSesion() {
    this.coockieService.deleteAll();
    this.cliente = new Cliente();
    this.veterinario = new Veterinario();
    this.mascota = new Mascota();
    this.cliente._id = "0";
    this.veterinario._id = "0";
    this.mascota._id = "0";
    this.usuario = new Usuario();
    this.token = "";
    this.ajustes = new Ajustes();
    return this.ajustes;
  }

  // --- FILTROS ---

  inicializaFiltroCliente() {
    this.filtroCliente = new FiltroCliente();
    this.filtroCliente.nombre = '';
    this.filtroCliente.apellidos = '';
    this.filtroCliente.dni = '';
    this.filtroCliente.telefono = '';
    this.filtroCliente.morosos = false;
    this.filtroCliente.citados = false;
    this.filtroCliente.porMascota = false;
    this.filtroCliente.atendidos = false;
  }

  inicializaFiltroMascota() {
    this.filtroMascota = new FiltroMascota();
    this.filtroMascota.nombre = '';
    this.filtroMascota.chip = '';
    this.filtroMascota.raza = '';
    this.filtroMascota.edad = null;
    this.filtroMascota.pelo = '';
    this.filtroMascota.especie = '';
    this.filtroMascota.sexo = '';
    this.filtroMascota.atendidas = false;
    this.filtroMascota.porCliente = false;
  }

  inicializaFiltroVeterinario() {
    this.filtroVeterinario = new FiltroVeterinario();
    this.filtroVeterinario.nombre = '';
    this.filtroVeterinario.apellidos = '';
    this.filtroVeterinario.dni = '';
  }

  inicializaFiltroUsuario() {
    this.filtroUsuario = new FiltroUsuario();
    this.filtroUsuario.nombre = '';
  }

  setFiltroCliente(filtro: FiltroCliente) {
    this.filtroCliente = filtro;
  }

  setFiltroMascota(filtro: FiltroMascota) {
    this.filtroMascota = filtro;
  }

  setFiltroVeterinario(filtro: FiltroVeterinario) {
    this.filtroVeterinario = filtro;
  }

  setFiltroUsuario(filtro: FiltroUsuario) {
    this.filtroUsuario = filtro;
  }

  // --- OTROS ---

  private metodoParaDesarrollo() {
    this.token = "5ca0e4fc34eaf00d889a9fee";
    this.getUsuarioPorToken();
  }


  generaVentana(alto, ancho, ruta, tipo) {

    //Obtenemos la ventana actual junto a todos sus datos de ubicación y tamaño
    let currentWindows = remote.BrowserWindow.getFocusedWindow();
    let location = currentWindows.getBounds();
    let posicionX = Math.floor(location.x + (location.width - ancho) / 2);
    let posicionY = Math.floor(location.y + (location.height - alto) / 2);

    //Creamos una ventana oscura que ocupará el 100% de la ventana principal
    let back = new remote.BrowserWindow({
      x: location.x,
      y: location.y,
      width: location.width,
      height: location.height,
      minHeight: location.height,
      frame: false,
      show: true,
      parent: currentWindows,
      resizable: false,
      backgroundColor: "#000",
      opacity: 0.6,
    });

    //Creamos la ventana que contendrá la información
    let win = new remote.BrowserWindow({
      x: posicionX,
      y: posicionY,
      width: ancho,
      minHeight: alto,
      height: alto,
      parent: back,
      show: false,
      resizable: false,
      webPreferences: {
        devTools: true,
        nodeIntegration: true,
      },
      frame: false,
      opacity: 1,
      minimizable: false,
      transparent: true,
    });

    //TODO: Borrar la siguiente linea cuando se termine de programar
    win.webContents.openDevTools()
    win.setMenu(null);
    back.setMenu(null);

    //Especificamos la ruta donde se encuentra el componente que vamos a cargar en la nueva página
    const path = require('path');
    const url = require('url');
    win.loadURL(url.format({
      pathname: path.join('localhost:4200'),
      protocol: 'http:',
      slashes: true,
      hash: ruta,
    }));

    //Con esta función podremos actuar en la ventana principal en función de lo que se haya realizado en la ventana secundaria.
    //Aquí es donde debemos añadir el tipo específico para diferenciar las funcionalidades de cada ventana.
    ipcRenderer.once('action-update', (event, arg) => {
      if (tipo == "nueva-mascota") {
        this.ngZone.run(() => { this.actionUpdateNuevaMascota(arg) });
      }
    });

    //Cuando se cierre la ventana secundaria, debemos cerrar también la ventana oscura que habíamos creado
    win.on('closed', () => {
      back.close();
      win = null;
    })

    //Cierre de la ventana oscura
    back.on('closed', () => {
      back = null;
    })

    //Esta función la usaremos para mostrar la ventana cuando esté el contenido totalmente cargado
    //Mientras se carga, se mostrará la ventana oscura que impedirá realizar otra acción simultánea
    win.once('ready-to-show', () => {
      // back.show();
      win.show();
    })
  }

  //Funcionalidad de la ventana para nuevas mascotas
  async actionUpdateNuevaMascota(arg) {
    if (arg) {
      //Esta ventana sólo se moestrará si se intenta crear una mascota sin haber seleccionado un cliente previamente
      if (arg.action == "continuar") {
        console.log("he llegado");
        //En caso de continuar sin cliente, seleccionaremos el cliente especial de manera automática.
        this.setCliente(this.clienteEspecial);
        console.log(this.clienteEspecial);
        this.router.navigate(['formMascotas']);
      } else if (arg.action == "elegir") {
        //En caso de seleccionar elegir cliente, redirigimos a la lista de clientes
        this.router.navigate(['clientes']);
      }
      //En cualquier otro caso no hacemos nada
    }
  }

}
