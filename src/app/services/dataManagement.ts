import { Injectable } from '@angular/core';
import { RestWS } from './restService';

@Injectable()
export class DataManagement {
  constructor(private restService: RestWS) { }

  public login(email, password): Promise<any> {
    return this.restService.login(email, password).then((data: String) => {
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
}
