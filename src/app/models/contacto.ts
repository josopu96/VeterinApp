export class Contacto {
    private _nombre: string;
    private _telefono: string;
    private _tipo: string;
  
    get nombre(){
      return this._nombre;
    }
  
    get telefono(){
      return this._telefono;
    }
  
    get tipo(){
      return this._tipo;
    }
  
    contructor(nombre: string, telefono: string, tipo: string){
      this.setNombre(nombre);
      this.setTelefono(telefono);
      this.setTipo(tipo);
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