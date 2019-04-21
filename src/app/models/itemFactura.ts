export class ItemFactura {
    private _cantidad: number;
    private _precioVenta: number;
    private _iva: number;
    private _idProducto: string;
  
    get cantidad(){
      return this._cantidad;
    }
  
    get precioVenta(){
      return this._precioVenta;
    }
  
    get iva(){
      return this._iva;
    }
  
    get idProducto(){
      return this._idProducto;
    }
  
    contructor(cantidad: number, precioVenta: number, iva: number, idProducto: string){
      this.setCantidad(cantidad);
      this.setPrecioVenta(precioVenta);
      this.setIva(iva);
      this.setIdProducto(idProducto);
    }
  
    setCantidad(cantidad: number){
      if(cantidad){
        this._cantidad = cantidad;
      }
    }
    setPrecioVenta(precioVenta: number){
      if(precioVenta){
        this._precioVenta = precioVenta;
      }
    }
    setIva(iva: number){
      if(iva){
        this._iva = iva;
      }
    }

    setIdProducto(idProducto: string){
      if(idProducto){
        this._idProducto = idProducto;
      }
    }
}