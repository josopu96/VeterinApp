import {Stock} from "./stock";

export class Producto {
  private _id: string;
  private _nombre: string;
  private _precioCompra: number;
  private _precioVenta: number;
  private _indicaciones: string;
  private _stocks: Stock[];

  get id(){
    return this._id;
  }

  get nombre(){
    return this._nombre;
  }

  get precioCompra(){
    return this._precioCompra;
  }
  
  get precioVenta(){
    return this._precioVenta;
  }

  get indicaciones(){
    return this._indicaciones;
  }

  get stocks(){
    return this._stocks;
  }

  contructor(
    id: string,
    nombre: string,
    precioCompra: number,
    precioVenta: number,
    indicaciones: string,
    stocks: Stock[]
  ){
    this.setId(id);
    this.setNombre(nombre);
    this.setPrecioCompra(precioCompra);
    this.setPrecioVenta(precioVenta);
    this.setIndicaciones(indicaciones);
    this.setStocks(stocks);
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
  setPrecioCompra(precioCompra: number){
    if(precioCompra){
      this._precioCompra = precioCompra;
    }
  }
  setPrecioVenta(precioVenta: number){
    if(precioVenta){
      this._precioVenta = precioVenta;
    }
  }
  setIndicaciones(indicaciones: string){
    if(indicaciones){
      this._indicaciones = indicaciones;
    }
  }
  setStocks(stocks: Stock[]){
    if(stocks){
      this._stocks = stocks;
    } else {
      this._stocks = [];
    }
  }

}