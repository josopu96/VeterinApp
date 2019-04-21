export class Receta {
  private _id: string;
  private _fecha: Date;
  private _responsable: string;
  private _observaciones: string;

  get id(){
    return this._id;
  }

  get fecha(){
    return this._fecha;
  }

  get responsable(){
    return this._responsable;
  }

  get observaciones(){
    return this._observaciones;
  }

  contructor(
    id: string,
    fecha: Date,
    responsable: string,
    observaciones: string
  ){
    this.setId(id);
    this.setFecha(fecha);
    this.setResponsable(responsable);
    this.setObservaciones(observaciones);
  }

  setId(id: string){
    if(id){
      this._id = id;
    }
  }
  setFecha(fecha: Date){
    if(fecha){
      this._fecha = fecha;
    }
  }
  setResponsable(responsable: string){
    if(responsable){
      this._responsable = responsable;
    }
  }
  setObservaciones(observaciones: string){
    if(observaciones){
      this._observaciones = observaciones;
    }
  }

}