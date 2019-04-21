export class Operacion {
    private _id: string;
    private _precio: number;
    private _concepto: string;
  
    get id(){
      return this._id;
    }
  
    get precio(){
      return this._precio;
    }
  
    get concepto(){
      return this._concepto;
    }
  
    contructor(id: string, precio: number, concepto: string){
      this.setId(id);
      this.setPrecio(precio);
      this.setConcepto(concepto);
    }
  
    setId(id: string){
      if(id){
        this._id = id;
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