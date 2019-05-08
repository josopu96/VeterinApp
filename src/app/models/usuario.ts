import {Ajustes} from "./ajustes";

export class Usuario {
  private __id: string;
  private _nombre: string;
  private _clave: string;
  private _isAdmin: boolean;
  private _email: string;
  private _ajustes: Ajustes;

  get _id(){
    return this.__id;
  }

  get nombre(){
    return this._nombre;
  }

  get clave(){
    return this._clave;
  }
  
  get isAdmin(){
    return this._isAdmin;
  }
  
  get email(){
    return this._email;
  }
  
  get ajustes(){
    return this._ajustes;
  }

  contructor(
    _id: string,
    nombre: string,
    clave: string,
    isAdmin: boolean,
    email: string,
    ajustes: Ajustes
  ){
    this.setId(_id);
    this.setNombre(nombre);
    this.setClave(clave);
    this.setIsAdmin(isAdmin);
    this.setEmail(email);
    this.setAjustes(ajustes);
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
  
  setClave(clave: string){
    if(clave){
      this._clave = clave;
    }
  }
  setIsAdmin(isAdmin: boolean){
    if(isAdmin){
      this._isAdmin = isAdmin;
    }
  }
  setEmail(email: string){
    if(email){
      this._email = email;
    }
  }
  setAjustes(ajustes: Ajustes){
    if(ajustes){
      this._ajustes = ajustes;
    }
  }

}