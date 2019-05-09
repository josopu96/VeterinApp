export class Veterinario {
  private __id: string;
  private _nombre: string;
  private _apellidos: string;
  private _fecNac: Date;
  private _dni: string;
  private _telefono: string;
  private _numColegiado: number;
  private _borrado: boolean;

  get _id(){
    return this.__id;
  }

  get nombre(){
    return this._nombre;
  }

  get apellidos(){
    return this._apellidos;
  }
  
  get telefono(){
    return this._telefono;
  }
  
  get numColegiado(){
    return this._numColegiado;
  }
  
  get borrado(){
    return this._borrado;
  }
  
  get dni(){
    return this._dni;
  }

  get fecNac(){
    return this._fecNac;
  }

  contructor(
    id: string,
    nombre: string,
    apellidos: string,
    fecNac: Date,
    dni: string,
    telefono: string,
    numColegiado: number,
    borrado: boolean
  ){
    this.setId(id);
    this.setNombre(nombre);
    this.setApellidos(apellidos);
    this.setTelefono(telefono);
    this.setNumColegiado(numColegiado);
    this.setBorrado(borrado);
    this.setDni(dni);
    this.setFecNac(fecNac);

  }

  setId(id: string){
    if(id){
      this.__id = id;
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
  setTelefono(telefono: string){
    if(telefono){
      this._telefono = telefono;
    }
  }
  setNumColegiado(numColegiado: number){
    if(numColegiado){
      this._numColegiado = numColegiado;
    }
  }
  setBorrado(borrado: boolean){
    if(borrado){
      this._borrado = borrado;
    }
  }
  setDni(dni: string){
    if(dni){
      this._dni = dni;
    }
  }
  setFecNac(fecNac: Date){
    if(fecNac){
      this._fecNac = fecNac;
    }
  }

}