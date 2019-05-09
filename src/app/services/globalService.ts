import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataManagement } from '../services/dataManagement';
import { Ajustes, Usuario, Mascota, Veterinario, Cliente } from '../app.dataModels';

@Injectable()
export class GlobalService {
    cliente: Cliente;
    veterinario: Veterinario;
    mascota: Mascota;
    usuario: Usuario;
    token: string;
    ajustes: Ajustes;

    constructor(
      private coockieService: CookieService,
      private dm: DataManagement
      ) {
        this.cliente = new Cliente();
        this.cliente.setId("0");
        this.veterinario = new Veterinario();
        this.veterinario.setId("0");
        this.mascota = new Mascota();
        this.mascota.setId("0");
        this.token = this.coockieService.get("token");
        if (this.token == "undefined") {
          this.metodoParaDesarrollo();
        } else {
          this.getUsuarioPorToken();
        }
    }

    metodoParaDesarrollo() {
      this.token = "5ca0e4fc34eaf00d889a9fee";
      this.getUsuarioPorToken();
    }

    getUsuarioPorToken() {
      this.dm.getUserByToken(this.token).then((res:Usuario) => {
        this.setUsuario(res);
        this.coockieService.set("token",res._id);
      });
    }

    setCliente( nuevoCliente: Cliente) {
      this.cliente = nuevoCliente;
    }

    getCliente() {
      return this.cliente;
    }

    setVeterinario( nuevoVeterinario: Veterinario) {
      this.veterinario = nuevoVeterinario;
    }

    getVeterinario() {
      return this.veterinario;
    }

    setMascota( nuevaMascota: Mascota) {
      this.mascota = nuevaMascota;
    }

    getMascota() {
      return this.mascota;
    }

    limpiarCliente() {
      this.limpiarMascota();
      this.cliente = new Cliente();
      this.cliente.setId("0");
      return this.cliente;
    }

    limpiarMascota() {
      this.mascota = new Mascota();
      this.mascota.setId("0");
      return this.mascota;
    }

    limpiarVeterinario() {
      this.veterinario = new Veterinario();
      this.veterinario.setId("0");
      return this.veterinario;
    }

    getUsuario() {
      return this.usuario;
    }

    setUsuario(user: Usuario) {
      this.usuario=new Usuario();
      this.ajustes=new Ajustes();
      this.ajustes.contructor(
        user.ajustes._id,
        user.ajustes.tamLetra,
        user.ajustes.tema,
        user.ajustes.recordatorio
      );
      this.usuario.contructor(
        user._id,
        user.nombre,
        user.clave,
        user.isAdmin,
        user.email,
        this.ajustes
      );

    }

    getTema(){
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
      if(this.getUsuario()) {
          this.ajustes = new Ajustes();
          this.ajustes.contructor(
            this.getUsuario().ajustes._id,
            this.getUsuario().ajustes.tamLetra,
            this.getUsuario().ajustes.tema,
            this.getUsuario().ajustes.recordatorio);
          this.ajustes.setTema(tema);
          this.usuario.setAjustes(this.ajustes);
      }
      return this.ajustes;
    }

    cerrarSesion() {
      this.coockieService.deleteAll();
      this.cliente = new Cliente();
      this.veterinario= new Veterinario();
      this.mascota = new Mascota();
      this.cliente.setId("0");
      this.veterinario.setId("0");
      this.mascota.setId("0");
      this.usuario = new Usuario();
      this.token = "";
      this.ajustes = new Ajustes();
      return this.ajustes;
    }

}
