import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Veterinario } from '../models/veterinario';
import { Mascota } from '../models/mascota';
import { Usuario } from '../models/usuario';

@Injectable()
export class GlobalService{
    cliente: Cliente;
    veterinario: Veterinario;
    mascota: Mascota;
    usuario: Usuario;

    constructor(){
      this.cliente = new Cliente();
      this.cliente.setId("0");
      this.veterinario = new Veterinario();
      this.veterinario.setId("0");
      this.mascota = new Mascota();
      this.mascota.setId("0");
      this.usuario = new Usuario();
    }

    setCliente( nuevoCliente: Cliente){
      this.cliente = nuevoCliente;
    }

    getCliente(){
      return this.cliente;
    }

    setVeterinario( nuevoVeterinario: Veterinario){
      this.veterinario = nuevoVeterinario;
    }

    getVeterinario(){
      return this.veterinario;
    }

    setMascota( nuevaMascota: Mascota){
      this.mascota = nuevaMascota;
    }

    getMascota(){
      return this.mascota;
    }

    limpiarCliente(){
      this.limpiarMascota();
      this.cliente = new Cliente();
      this.cliente.setId("0");
      return this.cliente;
    }

    limpiarMascota(){
      this.mascota = new Mascota();
      this.mascota.setId("0");
      return this.mascota;
    }

    limpiarVeterinario(){
      this.veterinario = new Veterinario();
      this.veterinario.setId("0");
      return this.veterinario;
    }

    getUsuario(){
      return this.usuario;
    }

    setUsuario(user: Usuario){
      this.usuario=user;
    }

}