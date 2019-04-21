export class Ajustes {
  private _id: string;
  private _tamLetra: number;
  private _tema: string;
  private _recordatorio: number;

  get id(){
    return this._id;
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
    id: string,
    tamLetra: number,
    tema: string,
    recordatorio: number
  ){
    this.setId(id);
    this.setTamLetra(tamLetra);
    this.setTema(tema);
    this.setRecordatorio(recordatorio);
  }

  setId(id: string){
    if(id){
      this._id = id;
    }
  }
  setTamLetra(tamLetra: number){
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