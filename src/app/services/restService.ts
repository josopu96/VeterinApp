import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from './../../config/configService';
import { AbstractWS } from './abstractService';
import { Injectable } from '@angular/core';

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
    return this.makePostRequest(this.path + 'usuarios/login', fd).then((res: String) => {
        console.log('Logged successfully');
        return Promise.resolve(res);
      }).catch(error => {
        console.log('Error: ' + error);
        return Promise.reject(error);
      });
  }

}
