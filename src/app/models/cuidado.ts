import { networkInterfaces } from "os";

export class Cuidado {
    private __id: string;
    private _fechaInicio: Date;
    private _fechaFin: Date;
    private _idMascota: string;
  
    get _id(){
        return this.__id;
    }

    get fechaInicio(){
      return this._fechaInicio;
    }
  
    get fechaFin(){
      return this._fechaFin;
    }
  
    get idMascota(){
      return this._idMascota;
    }

    get status():boolean{
        if(this.fechaFin){
            return false;
        } else {
            return true;
        }
    }
  
    contructor(_id: string, fechaInicio: Date, fechaFin: Date, idMascota: string){
      this.setId(_id);
      this.setFechaInicio(fechaInicio);
      this.setFechaFin(fechaFin);
      this.setIdMascota(idMascota);
    }
  
    setId(_id: string){
      if(_id){
        this.__id = _id;
      }
    }
    setFechaInicio(fechaInicio: Date){
      if(fechaInicio){
        this._fechaInicio = fechaInicio;
      }
    }
    setFechaFin(fechaFin: Date){
      if(fechaFin){
        this._fechaFin = fechaFin;
      }
    }
    setIdMascota(idMascota: string){
      if(idMascota){
        this._idMascota = idMascota;
      }
    }
}