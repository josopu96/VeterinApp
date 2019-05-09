export class Ajustes {
  private __id: string;
  private _tamLetra: string;
  private _tema: string;
  private _recordatorio: number;

  get _id(){
    return this.__id;
  }

  get tamLetra(){
    return this._tamLetra;
  }

  get tema(){
    return this._tema;
  }
  
  get recordatorio(){
    return this._recordatorio;
  }

  contructor(
    _id: string,
    tamLetra: string,
    tema: string,
    recordatorio: number
  ){
    this.setId(_id);
    this.setTamLetra(tamLetra);
    this.setTema(tema);
    this.setRecordatorio(recordatorio);
  }

  setId(_id: string){
    if(_id){
      this.__id = _id;
    }
  }
  setTamLetra(tamLetra: string){
    if(tamLetra){
      this._tamLetra = tamLetra;
    }
  }
  
  setTema(tema: string){
    if(tema){
      this._tema = tema;
    }
  }

  setRecordatorio(recordatorio: number){
    if(recordatorio){
      this._recordatorio = recordatorio;
    }
  }

}