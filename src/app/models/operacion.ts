export class Operacion {
    private _idOperacion: string;
    private _tipo: string;
    private _precio: number;
    private _concepto: string;
  
    get idOperacion(){
      return this._idOperacion;
    }
  
    get tipo(){
      return this._tipo;
    }
  
    get precio(){
      return this._precio;
    }
  
    get concepto(){
      return this._concepto;
    }
  
    contructor(idOperacion: string, tipo: string, precio: number, concepto: string){
      this.setId(idOperacion);
      this.setTipo(tipo);
      this.setPrecio(precio);
      this.setConcepto(concepto);
    }
  
    setId(idOperacion: string){
      if(idOperacion){
        this._idOperacion = idOperacion;
      }
    }
    setTipo(tipo: string){
      if(tipo){
        this._tipo = tipo;
      }
    }
    setPrecio(precio: number){
      if(precio){
        this._precio = precio;
      }
    }
    setConcepto(concepto: string){
      if(concepto){
        this._concepto = concepto;
      }
    }
  }