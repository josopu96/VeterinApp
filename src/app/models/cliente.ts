import {Factura} from "./factura";
import {Contacto} from "./contacto";

export class Cliente {
  private _id: string;
  private _nombre: string;
  private _apellidos: string;
  private _direccion: string;
  private _codPostal: number;
  private _poblacion: string;
  private _dni: string;
  private _email: string;
  private _fecNac: Date;
  private _contactos: Contacto[];
  private _facturas: Factura[];

  get id(){
    return this._id;
  }

  get nombre(){
    return this._nombre;
  }

  get apellidos(){
    return this._apellidos;
  }
  
  get direccion(){
    return this._direccion;
  }
  
  get codPostal(){
    return this._codPostal;
  }
  
  get poblacion(){
    return this._poblacion;
  }
  
  get dni(){
    return this._dni;
  }
  
  get email(){
    return this._email;
  }

  get fecNac(){
    return this._fecNac;
  }

  get contactos(){
    return this._contactos;
  }

  get facturas(){
    return this._facturas;
  }

  contructor(
    id: string,
    nombre: string,
    apellidos: string,
    direccion: string,
    codPostal: number,
    poblacion: string,
    dni: string,
    email: string,
    fecNac: Date,
    contactos: Contacto[],
    facturas: Factura[],
  ){
    this.setId(id);
    this.setNombre(nombre);
    this.setApellidos(apellidos);
    this.setDireccion(direccion);
    this.setCodPostal(codPostal);
    this.setPoblacion(poblacion);
    this.setDni(dni);
    this.setEmail(email);
    this.setFecNac(fecNac);
    this.setContactos(contactos);
    this.setFacturas(facturas);

  }

  setId(id: string){
    if(id){
      this._id = id;
    }
  }
  setNombre(nombre: string){
    if(nombre){
      this._nombre = nombre;
    }
  }
  
  setApellidos(apellidos: string){
    if(apellidos){
      this._apellidos = apellidos;
    }
  }
  setDireccion(direccion: string){
    if(direccion){
      this._direccion = direccion;
    }
  }
  setCodPostal(codPostal: number){
    if(codPostal){
      this._codPostal = codPostal;
    }
  }
  setPoblacion(poblacion: string){
    if(poblacion){
      this._poblacion = poblacion;
    }
  }
  setDni(dni: string){
    if(dni){
      this._dni = dni;
    }
  }
  setEmail(email: string){
    if(email){
      this._email = email;
    }
  }
  setFecNac(fecNac: Date){
    if(fecNac){
      this._fecNac = fecNac;
    }
  }
  setContactos(contactos: Contacto[]){
    if(contactos){
      this._contactos = contactos;
    } else {
      this._contactos = [];
    }
  }
  setFacturas(facturas: Factura[]){
    if(facturas){
      this._facturas = facturas;
    } else {
      this._facturas = [];
    }
  }

}