import {Receta} from "./receta";
import {TipoTratamiento} from "./tipoTratamiento";

export class Tratamiento {
  private __id: string;
  private _anamnesis: string;
  private _diagnostico: string;
  private _tipoTratamiento: TipoTratamiento;
  private _fecha: Date;
  private _receta: Receta;
  private _idVeterinario: string;

  get _id(){
    return this.__id;
  }

  get anamnesis(){
    return this._anamnesis;
  }

  get diagnostico(){
    return this._diagnostico;
  }
  
  get tipoTratamiento(){
    return this._tipoTratamiento;
  }

  get fecha(){
    return this._fecha;
  }

  get receta(){
    return this._receta;
  }

  get idVeterinario(){
    return this._idVeterinario;
  }

  contructor(
    id: string,
    anamnesis: string,
    diagnostico: string,
    tipoTratamiento: TipoTratamiento,
    fecha: Date,
    receta: Receta,
    idVeterinario: string
  ){
    this.setId(id);
    this.setAnamnesis(anamnesis);
    this.setDiagnostico(diagnostico);
    this.setTipoTratamiento(tipoTratamiento);
    this.setFecha(fecha);
    this.setReceta(receta);
    this.setIdVeterinario(idVeterinario);
  }

  setId(id: string){
    if(id){
      this.__id = id;
    }
  }
  setAnamnesis(anamnesis: string){
    if(anamnesis){
      this._anamnesis = anamnesis;
    }
  }
  setDiagnostico(diagnostico: string){
    if(diagnostico){
      this._diagnostico = diagnostico;
    }
  }
  setTipoTratamiento(tipoTratamiento: TipoTratamiento){
    if(tipoTratamiento){
      this._tipoTratamiento = tipoTratamiento;
    }
  }
  setFecha(fecha: Date){
    if(fecha){
      this._fecha = fecha;
    }
  }
  setReceta(receta: Receta){
    if(receta){
      this._receta = receta;
    }
  }
  setIdVeterinario(idVeterinario: string){
    if(idVeterinario){
      this._idVeterinario = idVeterinario;
    }
  }

}