import { Injectable } from '@angular/core';
import { RestWS } from './restService';
import { Usuario } from '../models/usuario';
import { Ajustes } from '../models/ajustes';
import { stringify } from '@angular/compiler/src/util';
import { Global } from '../models/bundle';

@Injectable()
export class DataManagement {
  constructor(private restService: RestWS) { }

  public login(email, password): Promise<any> {
    return this.restService.login(email, password).then((data: Usuario) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getClients(filters?): Promise<any> {
    return this.restService.getClients(filters).then((data: String) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getCliente(id: string): Promise<any> {
    return this.restService.getCliente(id).then((data: String) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getUserByToken(token: string): Promise<any> {
    return this.restService.getUserByToken(token).then((data: Usuario) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public updateAjustes(ajustes: Ajustes, token: string): Promise<any> {
    return this.restService.updateAjustes(ajustes, token).then((res) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getGlobalLogin(): Promise<Global> {
    return this.restService.getGlobalLogin().then((res) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public updateGlobalLogin(userId: string, recordarPass: string) {
    return this.restService.updateGlobalLogin(userId, recordarPass).then((res) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getMascotas(filters?): Promise<any> {
    return this.restService.getMascotas(filters).then((data: String) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }
}
