import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from './../../config/configService';
import { AbstractWS } from './abstractService';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Ajustes } from '../models/ajustes';
import { Global } from '../models/bundle';
import { Cliente } from '../app.dataModels';

@Injectable()
export class RestWS extends AbstractWS {
  path = '';

  constructor(
    private config: ConfigService,
    http: HttpClient,
  ) {
    super(http);
    this.path = this.config.config().restUrlPrefix;
  }
  // Methods
  public login(email, clave) {
    const fd = new HttpParams().set('email', email).set('clave', clave);
    return this.makePostRequest(this.path + 'usuarios/login', fd).then((res: Usuario) => {
      console.log('Logged successfully');
      return Promise.resolve(res);
    }).catch(error => {
      console.log('Error: ' + error);
      return Promise.reject(error);
    });
  }

  public getClients(filters?):Promise<Cliente[]> {
    const fd = new HttpParams();
    if (filters) {
      fd.set('filters', filters);
    }
    return this.makeGetRequest(this.path + 'clientes', fd).then((res: Cliente[]) => {
      return Promise.resolve(res);
    }).catch(error => {
      console.log('Error: ' + error);
      return Promise.reject(error);
    });
  }

  public getCliente(id: string) {
    const fd = new HttpParams();
    return this.makeGetRequest(this.path + 'clientes/' + id, fd).then((res: String) => {
      return Promise.resolve(res);
    }).catch(error => {
      console.log('Error: ' + error);
      return Promise.reject(error);
    });
  }

  public getUserByToken(token: string) {
    const fd = new HttpParams();
    return this.makeGetRequest(this.path + 'usuarios/token/' + token, fd).then((res: Usuario) => {
      console.log("la respuesta del server es: " + res);
      return Promise.resolve(res);
    }).catch(error => {
      console.error('Error: ' + error);
      return Promise.reject(error);
    });
  }

  public updateAjustes(ajustes: Ajustes, token: string) {
    const fd = new HttpParams()
      .set('tema', ajustes.tema)
      .set('tamLetra', ajustes.tamLetra)
      .set('recordatorio', ajustes.recordatorio.toString())
      .set('id', ajustes._id);
    return this.makePostRequest(this.path + 'usuarios/updateAjustes/' + token, fd).then((res) => {
      console.log(res);
      return Promise.resolve(res);
    }).catch(error => {
      console.error('Error: ' + error);
      return Promise.reject(error);
    });
  }

  public getGlobalLogin(): Promise<Global> {
    const fd = new HttpParams();
    return this.makeGetRequest(this.path + 'global/login', fd).then((res: Global) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public updateGlobalLogin(userId: string, recordarPass: string) {
    const fd = new HttpParams()
      .set('usuarioId', userId)
      .set('recordarPass', recordarPass);
    return this.makePostRequest(this.path + 'global/updateLogin', fd).then((_) => {
      return Promise.resolve();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getMascotas(filters?) {
    const fd = new HttpParams();
    if (filters) {
      fd.set('filters', filters);
    }
    return this.makeGetRequest(this.path + 'mascotas', fd).then((res: String) => {
      return Promise.resolve(res);
    }).catch(error => {
      console.log('Error: ' + error);
      return Promise.reject(error);
    });
  }
}
