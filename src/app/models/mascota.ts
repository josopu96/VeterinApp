import {Analitica} from "./analitica";
import {Radiografia} from "./radiografia";
import {Prueba} from "./prueba";
import {Desparasitacion} from "./desparasitacion";
import {Vacuna} from "./vacuna";
import {Tratamiento} from "./tratamiento";

export class Mascota {
  private __id: string;
  private _nombre: string;
  private _chip: string;
  private _fecNac: Date;
  private _fecBaja: Date;
  private _sexo: string;
  private _estado: string;
  private _pelo: string;
  private _capa: string;
  private _especie: string;
  private _raza: string;
  private _analiticas: Analitica[];
  private _radiografias: Radiografia[];
  private _pruebas: Prueba[];
  private _desparasitaciones: Desparasitacion[];
  private _vacunas: Vacuna[];
  private _tratamientos: Tratamiento[];

  get _id(){
    return this.__id;
  }

  get nombre(){
    return this._nombre;
  }

  get chip(){
    return this._chip;
  }
  
  get fecNac(){
    return this._fecNac;
  }

  get fecBaja(){
    return this._fecBaja;
  }

  get sexo(){
    return this._sexo;
  }

  get estado(){
    return this._estado;
  }

  get pelo(){
    return this._pelo;
  }

  get capa(){
    return this._capa;
  }

  get especie(){
    return this._especie;
  }

  get raza(){
    return this._raza;
  }

  get analiticas(){
    return this._analiticas;
  }

  get radiografias(){
    return this._radiografias;
  }

  get pruebas(){
    return this._pruebas;
  }

  get desparasitaciones(){
    return this._desparasitaciones;
  }

  get vacunas(){
    return this._vacunas;
  }

  get tratamientos(){
    return this._tratamientos;
  }

  contructor(
    id: string,
    nombre: string,
    chip: string,
    fecNac: Date,
    fecBaja: Date,
    sexo: string,
    estado: string,
    pelo: string,
    capa: string,
    especie: string,
    raza: string,
    analiticas: Analitica[],
    radiografias: Radiografia[],
    pruebas: Prueba[],
    desparasitaciones: Desparasitacion[],
    vacunas: Vacuna[],
    tratamientos: Tratamiento[]
  ){
    this.setId(id);
    this.setNombre(nombre);
    this.setChip(chip);
    this.setFecNac(fecNac);
    this.setFecBaja(fecBaja);
    this.setSexo(sexo);
    this.setEstado(estado);
    this.setPelo(pelo);
    this.setCapa(capa);
    this.setEspecie(especie);
    this.setRaza(raza);
    this.setAnaliticas(analiticas);
    this.setRadiografias(radiografias);
    this.setPruebas(pruebas);
    this.setDesparasitaciones(desparasitaciones);
    this.setVacunas(vacunas);
    this.setTratamientos(tratamientos);
  }

  setId(id: string){
    if(id){
      this.__id = id;
    }
  }
  setNombre(nombre: string){
    if(nombre){
      this._nombre = nombre;
    }
  }
  setChip(chip: string){
    if(chip){
      this._chip = chip;
    }
  }
  setFecNac(fecNac: Date){
    if(fecNac){
      this._fecNac = fecNac;
    }
  }
  setFecBaja(fecBaja: Date){
    if(fecBaja){
      this._fecBaja = fecBaja;
    }
  }
  setSexo(sexo: string){
    if(sexo){
      this._sexo = sexo;
    }
  }
  setEstado(estado: string){
    if(estado){
      this._estado = estado;
    }
  }
  setPelo(pelo: string){
    if(pelo){
      this._pelo = pelo;
    }
  }
  setCapa(capa: string){
    if(capa){
      this._capa = capa;
    }
  }
  setEspecie(especie: string){
    if(especie){
      this._especie = especie;
    }
  }
  setRaza(raza: string){
    if(raza){
      this._raza = raza;
    }
  }
  setAnaliticas(analiticas: Analitica[]){
    if(analiticas){
      this._analiticas = analiticas;
    } else {
      this._analiticas = [];
    }
  }
  setRadiografias(radiografias: Radiografia[]){
    if(radiografias){
      this._radiografias = radiografias;
    } else {
      this._radiografias = [];
    }
  }
  setPruebas(pruebas: Prueba[]){
    if(pruebas){
      this._pruebas = pruebas;
    } else {
      this._pruebas = [];
    }
  }
  setDesparasitaciones(desparasitaciones: Desparasitacion[]){
    if(desparasitaciones){
      this._desparasitaciones = desparasitaciones;
    } else {
      this._desparasitaciones = [];
    }
  }
  setVacunas(vacunas: Vacuna[]){
    if(vacunas){
      this._vacunas = vacunas;
    } else {
      this._vacunas = [];
    }
  }
  setTratamientos(tratamientos: Tratamiento[]){
    if(tratamientos){
      this._tratamientos = tratamientos;
    } else {
      this._tratamientos = [];
    }
  }

}