import {Radiografia} from "./radiografia";

export class Prueba {
  private _id: string;
  private _concepto: string;
  private _categoria: string;
  private _tipoPrueba: string;
  private _fecha: Date;
  private _radiografias: Radiografia[];

  get id(){
    return this._id;
  }

  get concepto(){
    return this._concepto;
  }

  get categoria(){
    return this._categoria;
  }
  
  get tipoPrueba(){
    return this._tipoPrueba;
  }

  get fecha(){
    return this._fecha;
  }

  get radiografias(){
    return this._radiografias;
  }

  contructor(
    id: string,
    concepto: string,
    categoria: string,
    tipoPrueba: string,
    fecha: Date,
    radiografias: Radiografia[]
  ){
    this.setId(id);
    this.setConcepto(concepto);
    this.setCategoria(categoria);
    this.setTipoPrueba(tipoPrueba);
    this.setFecha(fecha);
    this.setRadiografia(radiografias);
  }

  setId(id: string){
    if(id){
      this._id = id;
    }
  }
  setConcepto(concepto: string){
    if(concepto){
      this._concepto = concepto;
    }
  }
  setCategoria(categoria: string){
    if(categoria){
      this._categoria = categoria;
    }
  }
  setTipoPrueba(tipoPrueba: string){
    if(tipoPrueba){
      this._tipoPrueba = tipoPrueba;
    }
  }
  setFecha(fecha: Date){
    if(fecha){
      this._fecha = fecha;
    }
  }
  setRadiografia(radiografias: Radiografia[]){
    if(radiografias){
      this._radiografias = radiografias;
    } else {
      this._radiografias = [];
    }
  }

}