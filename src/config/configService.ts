import { Injectable } from '@angular/core';
import { environment } from './environments/environment';

@Injectable()
export class ConfigService {
  constructor() {}

  public config() {
    let urlPrefix = 'http://localhost:9018/';
    let urlAPI = '';
    if (environment.production) {
      urlPrefix = '';
      urlAPI = '';
    }
    // pathFiles for Storage provider
    let pathFiles = '/assets/storageFiles';
    // myCustomVars
    let myCustomVars1 = 123;
    let myCustomVars2 = 456;
    return {
      restUrlPrefix: urlPrefix + urlAPI,
      destPathFiles: pathFiles,
      myCustomVars1: myCustomVars1,
      myCustomVars2: myCustomVars2
    };
  }
}
