export class Visita {
  private _id: string;
  private _descripcion: string;
  private _fecha: Date;
  private _idCliente: string;

  get id(){
    return this._id;
  }

  get descripcion(){
    return this._descripcion;
  }

  get fecha(){
    return this._fecha;
  }
  
  get idCliente(){
    return this._idCliente;
  }

  contructor(
    id: string,
    descripcion: string,
    fecha: Date,
    idCliente: string
  ){
    this.setId(id);
    this.setDescripcion(descripcion);
    this.setFecha(fecha);
    this.setIdCliente(idCliente);
  }

  setId(id: string){
    if(id){
      this._id = id;
    }
  }
  setDescripcion(descripcion: string){
    if(descripcion){
      this._descripcion = descripcion;
    }
  }
  
  setFecha(fecha: Date){
    if(fecha){
      this._fecha = fecha;
    }
  }
  setIdCliente(idCliente: string){
    if(idCliente){
      this._idCliente = idCliente;
    }
  }

}