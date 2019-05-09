export class Contacto {
    private __id: string;
    private _nombre: string;
    private _telefono: string;
    private _tipo: string;
  
    get _id(){
      return this.__id;
    }
  
    get nombre(){
      return this._nombre;
    }
  
    get telefono(){
      return this._telefono;
    }
  
    get tipo(){
      return this._tipo;
    }
  
    contructor(_id: string, nombre: string, telefono: string, tipo: string){
      this.setId(_id);
      this.setNombre(nombre);
      this.setTelefono(telefono);
      this.setTipo(tipo);
    }
  
    setId(_id: string){
      if(_id){
        this.__id = _id;
      }
    }
    setNombre(nombre: string){
      if(nombre){
        this._nombre = nombre;
      }
    }
    setTelefono(telefono: string){
      if(telefono){
        this._telefono = telefono;
      }
    }
    setTipo(tipo: string){
      if(tipo){
        this._tipo = tipo;
      }
    }
}