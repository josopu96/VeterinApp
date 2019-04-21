export class Tarifa {
  private _id: string;
  private _nombre: string;
  private _porcentaje: number;

  get id(){
    return this._id;
  }

  get nombre(){
    return this._nombre;
  }

  get porcentaje(){
    return this._porcentaje;
  }

  contructor(
    id: string,
    nombre: string,
    porcentaje: number
  ){
    this.setId(id);
    this.setNombre(nombre);
    this.setPorcentaje(porcentaje);
  }

  setId(id: string){
    if(id){
      this._id = id;
    }
  }
  setNombre(nombre: string){
    if(nombre){
      this._nombre = nombre;
    }
  }
  
  setPorcentaje(porcentaje: number){
    if(porcentaje){
      this._porcentaje = porcentaje;
    }
  }

}