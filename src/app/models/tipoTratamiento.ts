export class TipoTratamiento {
  private __id: string;
  private _nombre: string;
  private _dosis: string;
  private _hora: number;
  private _estado: boolean;

  get _id(){
    return this.__id;
  }

  get nombre(){
    return this._nombre;
  }

  get dosis(){
    return this._dosis;
  }

  get hora(){
    return this._hora;
  }

  get estado(){
    return this._estado;
  }

  contructor(
    id: string,
    nombre: string,
    dosis: string,
    hora: number,
    estado: boolean
  ){
    this.setId(id);
    this.setNombre(nombre);
    this.setDosis(dosis);
    this.setHora(hora);
    this.setEstado(estado);
  }

  setId(id: string){
    if(id){
      this.__id = id;
    }
  }
  setNombre(nombre: string){
    if(nombre){
      this._nombre = nombre;
    }
  }
  setDosis(dosis: string){
    if(dosis){
      this._dosis = dosis;
    }
  }
  setHora(hora: number){
    if(hora){
      this._hora = hora;
    }
  }
  setEstado(estado: boolean){
    if(estado){
      this._estado = estado;
    }
  }

}