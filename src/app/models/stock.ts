export class Stock {
  private __id: string;
  private _lote: string;
  private _unidades: number;
  private _fecCompra: Date;
  private _fecCaducidad: Date;

  get _id(){
    return this.__id;
  }

  get lote(){
    return this._lote;
  }

  get unidades(){
    return this._unidades;
  }
  
  get fecCompra(){
    return this._fecCompra;
  }

  get fecCaducidad(){
    return this._fecCaducidad;
  }

  contructor(
    id: string,
    lote: string,
    unidades: number,
    fecCompra: Date,
    fecCaducidad: Date
  ){
    this.setId(id);
    this.setLote(lote);
    this.setUnidades(unidades);
    this.setFecCompra(fecCompra);
    this.setFecCaducidad(fecCaducidad);
  }

  setId(id: string){
    if(id){
      this.__id = id;
    }
  }
  setLote(lote: string){
    if(lote){
      this._lote = lote;
    }
  }
  setUnidades(unidades: number){
    if(unidades){
      this._unidades = unidades;
    }
  }
  setFecCompra(fecCompra: Date){
    if(fecCompra){
      this._fecCompra = fecCompra;
    }
  }
  setFecCaducidad(fecCaducidad: Date){
    if(fecCaducidad){
      this._fecCaducidad = fecCaducidad;
    }
  }

}