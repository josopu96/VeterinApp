import {Veterinario} from "./veterinario";
import {Producto} from "./producto";

export class Clinica {
  private __id: string;
  private _cif: string;
  private _nombre: string;
  private _direccion: string;
  private _telefono: string;
  private _movil: string;
  private _fax: string;
  private _poblacion: string;
  private _provincia: string;
  private _pais: string;
  private _codPostal: number;
  private _web: string;
  private _imagen: string;
  private _email: string;
  private _propietario: string;
  private _dniPropietario: string;
  private _veterinarios: Veterinario[];
  private _productos: Producto[];

  get _id(){
    return this.__id;
  }

  get cif(){
    return this._cif;
  }

  get nombre(){
    return this._nombre;
  }

  get direccion(){
    return this._direccion;
  }

  get telefono(){
    return this._telefono;
  }
  
  get movil(){
    return this._movil;
  }
  
  get fax(){
    return this._fax;
  }
  
  get poblacion(){
    return this._poblacion;
  }
  
  get provincia(){
    return this._provincia;
  }
  
  get pais(){
    return this._pais;
  }
  
  get codPostal(){
    return this._codPostal;
  }
  
  get web(){
    return this._web;
  }
  
  get email(){
    return this._email;
  }
  
  get imagen(){
    return this._imagen;
  }
  
  get propietario(){
    return this._propietario;
  }
  
  get dniPropietario(){
    return this._dniPropietario;
  }
  
  get veterinarios(){
    return this._veterinarios;
  }
  
  get productos(){
    return this._productos;
  }

  contructor(
    _id: string,
    cif: string,
    nombre: string,
    direccion: string,
    telefono: string,
    movil: string,
    fax: string,
    poblacion: string,
    provincia: string,
    pais: string,
    codPostal: number,
    web: string,
    imagen: string,
    email: string,
    propietario: string,
    dniPropietario: string,
    veterinarios: Veterinario[],
    productos: Producto[]
  ){
    this.setId(_id);
    this.setCif(cif);
    this.setNombre(nombre);
    this.setDireccion(direccion);
    this.setTelefono(telefono);
    this.setMovil(movil);
    this.setFax(fax);
    this.setPoblacion(poblacion);
    this.setProvincia(provincia);
    this.setPais(pais);
    this.setCodPostal(codPostal);
    this.setWeb(web);
    this.setEmail(email);
    this.setImagen(imagen);
    this.setPropietario(propietario);
    this.setDniPropietario(dniPropietario);
    this.setVeterinarios(veterinarios);
    this.setProductos(productos);
  }

  setId(_id: string){
    if(_id){
      this.__id = _id;
    }
  }
  setCif(cif: string){
    if(cif){
      this._cif = cif;
    }
  }
  setNombre(nombre: string){
    if(nombre){
      this._nombre = nombre;
    }
  }
  setDireccion(direccion: string){
    if(direccion){
      this._direccion = direccion;
    }
  }
  setTelefono(telefono: string){
    if(telefono){
      this._telefono = telefono;
    }
  }
  setMovil(movil: string){
    if(movil){
      this._movil = movil;
    }
  }
  setFax(fax: string){
    if(fax){
      this._fax = fax;
    }
  }
  setPoblacion(poblacion: string){
    if(poblacion){
      this._poblacion = poblacion;
    }
  }
  setProvincia(provincia: string){
    if(provincia){
      this._provincia = provincia;
    }
  }
  setPais(pais: string){
    if(pais){
      this._pais = pais;
    }
  }
  setCodPostal(codPostal: number){
    if(codPostal){
      this._codPostal = codPostal;
    }
  }
  setWeb(web: string){
    if(web){
      this._web = web;
    }
  }
  setEmail(email: string){
    if(email){
      this._email = email;
    }
  }
  setImagen(imagen: string){
    if(imagen){
      this._imagen = imagen;
    }
  }
  setPropietario(propietario: string){
    if(propietario){
      this._propietario = propietario;
    }
  }
  setDniPropietario(dniPropietario: string){
    if(dniPropietario){
      this._dniPropietario = dniPropietario;
    }
  }
  setVeterinarios(veterinarios: Veterinario[]){
    if(veterinarios){
      this._veterinarios = veterinarios;
    } else {
      this._veterinarios = [];
    }
  }
  setProductos(productos: Producto[]){
    if(productos){
      this._productos = productos;
    } else {
      this._productos = [];
    }
  }

}