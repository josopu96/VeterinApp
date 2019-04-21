import {Visita} from "./visita";

export class Calendario {
  private _id: string;
  private _visitas: Visita[];

  get id(){
    return this._id;
  }

  get visitas(){
    return this._visitas;
  }

  contructor(
    id: string,
    visitas: Visita[]
  ){
    this.setId(id);
    this.setVisitas(visitas);
  }

  setId(id: string){
    if(id){
      this._id = id;
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