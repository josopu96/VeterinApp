import { Injectable } from '@angular/core';
import { RestWS } from './restService';
import { Usuario } from '../models/usuario';

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
}
