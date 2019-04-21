export class Analitica {
  private _id: string;
  private _nombre: string;
  private _descripcion: string;
  private _resultado: string;
  private _fecha: Date;

  get id(){
    return this._id;
  }

  get nombre(){
    return this._nombre;
  }

  get descripcion(){
    return this._descripcion;
  }
  
  get resultado(){
    return this._resultado;
  }

  get fecha(){
    return this._fecha;
  }

  contructor(
    id: string,
    nombre: string,
    descripcion: string,
    resultado: string,
    fecha: Date
  ){
    this.setId(id);
    this.setNombre(nombre);
    this.setDescripciones(descripcion);
    this.setResultado(resultado);
    this.setFecha(fecha);
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
  setDescripciones(descripcion: string){
    if(descripcion){
      this._descripcion = descripcion;
    }
  }
  setResultado(resultado: string){
    if(resultado){
      this._resultado = resultado;
    }
  }
  setFecha(fecha: Date){
    if(fecha){
      this._fecha = fecha;
    }
  }

}