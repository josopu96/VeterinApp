export class Desparasitacion {
  private _id: string;
  private _fecha: Date;
  private _tipoDesparasitacion: string;

  get id(){
    return this._id;
  }

  get tipoDesparasitacion(){
    return this._tipoDesparasitacion;
  }

  get fecha(){
    return this._fecha;
  }

  contructor(
    id: string,
    tipoDesparasitacion: string,
    fecha: Date
  ){
    this.setId(id);
    this.setTipoDesparasitacion(tipoDesparasitacion);
    this.setFecha(fecha);
  }

  setId(id: string){
    if(id){
      this._id = id;
    }
  }
  setTipoDesparasitacion(tipoDesparasitacion: string){
    if(tipoDesparasitacion){
      this._tipoDesparasitacion = tipoDesparasitacion;
    }
  }
  setFecha(fecha: Date){
    if(fecha){
      this._fecha = fecha;
    }
  }

}