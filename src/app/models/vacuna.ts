export class Vacuna {
  private __id: string;
  private _fecha: Date;
  private _tipoVacuna: string;

  get _id(){
    return this.__id;
  }

  get tipoVacuna(){
    return this._tipoVacuna;
  }

  get fecha(){
    return this._fecha;
  }

  contructor(
    id: string,
    tipoVacuna: string,
    fecha: Date
  ){
    this.setId(id);
    this.setTipoVacuna(tipoVacuna);
    this.setFecha(fecha);
  }

  setId(id: string){
    if(id){
      this.__id = id;
    }
  }
  setTipoVacuna(tipoVacuna: string){
    if(tipoVacuna){
      this._tipoVacuna = tipoVacuna;
    }
  }
  setFecha(fecha: Date){
    if(fecha){
      this._fecha = fecha;
    }
  }

}