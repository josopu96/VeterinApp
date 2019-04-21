import {Operacion} from "./operacion";
import {ItemFactura} from "./itemFactura";

export class Factura {
  private _numero: string;
  private _fecha: Date;
  private _importeTotal: number;
  private _tipoPago: string;
  private _estado: string;
  private _porcentajeTarifa: number;
  private _tratamientos: Operacion[];
  private _vacunas: Operacion[];
  private _desparasitaciones: Operacion[];
  private _pruebas: Operacion[];
  private _analiticas: Operacion[];
  private _radiografias: Operacion[];
  private _itemsFactura: ItemFactura[];

  get numero(){
    return this._numero;
  }

  get fecha(){
    return this._fecha;
  }

  get importeTotal(){
    return this._importeTotal;
  }
  
  get tipoPago(){
    return this._tipoPago;
  }
  
  get estado(){
    return this._estado;
  }
  
  get porcentajeTarifa(){
    return this._porcentajeTarifa;
  }
  
  get tratamientos(){
    return this._tratamientos;
  }
  
  get vacunas(){
    return this._vacunas;
  }

  get desparasitaciones(){
    return this._desparasitaciones;
  }

  get pruebas(){
    return this._pruebas;
  }

  get analiticas(){
    return this._analiticas;
  }

  get radiografias(){
    return this._radiografias;
  }

  get itemsFactura(){
    return this._itemsFactura;
  }

  contructor(
    numero:string,
    fecha: Date,
    tipoPago:string,
    estado:string,
    porcentajeTarifa: number,
    tratamientos: Operacion[],
    vacunas: Operacion[],
    desparasitaciones: Operacion[],
    pruebas: Operacion[],
    analiticas: Operacion[],
    radiografias: Operacion[],
    itemsFactura: ItemFactura[],
  ){
    this.setNumero(numero);
    this.setFecha(fecha);
    this.setTipoPago(tipoPago);
    this.setEstado(estado);
    this.setPorcentajeTarifa(porcentajeTarifa);
    this.setTratamientos(tratamientos);
    this.setVacunas(vacunas);
    this.setDesparasitaciones(desparasitaciones);
    this.setPruebas(pruebas);
    this.setAnaliticas(analiticas);
    this.setRadiografias(radiografias);
    this.setItemsFactura(itemsFactura);
    this.setimporteTotal();

  }

  setNumero(numero: string){
    if(numero){
      this._numero = numero;
    }
  }
  setFecha(fecha: Date){
    if(fecha){
      this._fecha = fecha;
    }
  }
  setimporteTotal(){
    this._importeTotal = 0;
    for(let t of this._tratamientos){
      this._importeTotal = this._importeTotal + t.precio;
    }
    for(let v of this._vacunas){
      this._importeTotal = this._importeTotal + v.precio;
    }
    for(let d of this._desparasitaciones){
      this._importeTotal = this._importeTotal + d.precio;
    }
    for(let p of this._pruebas){
      this._importeTotal = this._importeTotal + p.precio;
    }
    for(let a of this._analiticas){
      this._importeTotal = this._importeTotal + a.precio;
    }
    for(let r of this._radiografias){
      this._importeTotal = this._importeTotal + r.precio;
    }
    for(let i of this._itemsFactura){
      this._importeTotal = this._importeTotal + i.precioVenta;
    }
  }
  setTipoPago(tipoPago: string){
    if(tipoPago){
      this._tipoPago = tipoPago;
    }
  }
  setEstado(estado: string){
    if(estado){
      this._estado = estado;
    }
  }
  setPorcentajeTarifa(porcentajeTarifa: number){
    if(porcentajeTarifa){
      this._porcentajeTarifa = porcentajeTarifa;
    }
  }
  setTratamientos(tratamientos: Operacion[]){
    if(tratamientos){
      this._tratamientos = tratamientos;
    } else {
      this._tratamientos = [];
    }
  }
  setVacunas(vacunas: Operacion[]){
    if(vacunas){
      this._vacunas = vacunas;
    } else {
      this._vacunas = [];
    }
  }
  setDesparasitaciones(desparasitaciones: Operacion[]){
    if(desparasitaciones){
      this._desparasitaciones = desparasitaciones;
    } else {
      this._desparasitaciones = [];
    }
  }
  setPruebas(pruebas: Operacion[]){
    if(pruebas){
      this._pruebas = pruebas;
    } else {
      this._pruebas = [];
    }
  }
  setAnaliticas(analiticas: Operacion[]){
    if(analiticas){
      this._analiticas = analiticas;
    } else {
      this._analiticas = [];
    }
  }
  setRadiografias(radiografias: Operacion[]){
    if(radiografias){
      this._radiografias = radiografias;
    } else {
      this._radiografias = [];
    }
  }
  setItemsFactura(itemsFactura: ItemFactura[]){
    if(itemsFactura){
      this._itemsFactura = itemsFactura;
    } else {
      this._itemsFactura = [];
    }
  }

}