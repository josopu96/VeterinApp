import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from './../../config/configService';
import { AbstractWS } from './abstractService';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

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

  public getClients(filters?) {
    const fd = new HttpParams();
    if (filters) {
      fd.set('filters', filters);
    }
    return this.makeGetRequest(this.path + 'clientes', fd).then((res: String) => {
        return Promise.resolve(res);
      }).catch(error => {
        console.log('Error: ' + error);
        return Promise.reject(error);
      });
  }

  public getCliente(id: string) {
    const fd = new HttpParams();
    return this.makeGetRequest(this.path + 'clientes/'+id, fd).then((res: String) => {
        return Promise.resolve(res);
      }).catch(error => {
        console.log('Error: ' + error);
        return Promise.reject(error);
      });
  }

  public getUserByToken(token: string) {
    const fd = new HttpParams().set('token', token);
    return this.makeGetRequest(this.path + 'usuarios/token/', fd).then((res: Usuario) => {
        return Promise.resolve(res);
      }).catch(error => {
        console.error('Error: ' + error);
        return Promise.reject(error);
      });
  }
}
