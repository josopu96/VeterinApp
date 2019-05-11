import {Factura} from "./factura";
import {Contacto} from "./contacto";
import {Cuidado} from "./cuidado";

export class Cliente {
  private __id: string;
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
  private _cuidados: Cuidado[];
  private _fecModificacion: Date;

  get _id(){
    return this.__id;
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

  get cuidados(){
    return this._cuidados;
  }

  get fecModificacion(){
    return this._fecModificacion;
  }

  contructor(
    _id: string,
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
    cuidados: Cuidado[],
    fecModificacion: Date,
  ){
    this.setId(_id);
    this.setNombre(nombre);
    this.setApellidos(apellidos);
    this.setDireccion(direccion);
    this.setCodPostal(codPostal);
    this.setPoblacion(poblacion);
    this.setDni(dni);
    this.setEmail(email);
    this.setFecNac(new Date(fecNac));
    this.setContactos(contactos);
    this.setFacturas(facturas);
    this.setCuidados(cuidados);
    this.setFecModificacion(fecModificacion);

  }

  setId(_id: string){
    if(_id){
      this.__id = _id;
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
      this._fecNac = new Date(fecNac);
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
  setCuidados(cuidados: Cuidado[]){
    if(cuidados){
      this._cuidados = cuidados;
    } else {
      this._cuidados = [];
    }
  }
  setFecModificacion(fecModificacion: Date){
    if(fecModificacion){
      this._fecModificacion = new Date(fecModificacion);
    }
  }

}