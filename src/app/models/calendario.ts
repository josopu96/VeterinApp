import {Visita} from "./visita";

export class Calendario {
  private __id: string;
  private _visitas: Visita[];

  get _id(){
    return this.__id;
  }

  get visitas(){
    return this._visitas;
  }

  contructor(
    _id: string,
    visitas: Visita[]
  ){
    this.setId(_id);
    this.setVisitas(visitas);
  }

  setId(_id: string){
    if(_id){
      this.__id = _id;
    }
  }
  setVisitas(visitas: Visita[]){
    if(visitas){
      this._visitas = visitas;
    } else {
      this._visitas = [];
    }
  }

}