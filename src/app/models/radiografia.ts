export class Radiografia {
  private __id: string;
  private _imagen: string;
  private _fecha: Date;

  get _id(){
    return this.__id;
  }

  get imagen(){
    return this._imagen;
  }

  get fecha(){
    return this._fecha;
  }

  contructor(
    id: string,
    imagen: string,
    fecha: Date
  ){
    this.setId(id);
    this.setImagen(imagen);
    this.setFecha(fecha);
  }

  setId(id: string){
    if(id){
      this.__id = id;
    }
  }
  setImagen(imagen: string){
    if(imagen){
      this._imagen = imagen;
    }
  }
  setFecha(fecha: Date){
    if(fecha){
      this._fecha = fecha;
    }
  }

}