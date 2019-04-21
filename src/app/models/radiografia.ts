export class Radiografia {
  private _id: string;
  private _imagen: string;
  private _fecha: Date;

  get id(){
    return this._id;
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
      this._id = id;
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