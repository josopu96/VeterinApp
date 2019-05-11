import { Injectable } from '@angular/core';
import { environment } from './environments/environment';

@Injectable()
export class ConfigService {
  constructor() {}

  public config() {
    let urlPrefix = 'http://localhost:9018/';
    let urlAPI = '';
    let clinicaId = '5cb9a4d4dd4f5326044c59f6';
    if (environment.production) {
      urlPrefix = '';
      urlAPI = '';
    }
    // pathFiles for Storage provider
    let pathFiles = '/assets/storageFiles';
    // myCustomVars
    let myCustomVars2 = 456;
    return {
      restUrlPrefix: urlPrefix + urlAPI,
      destPathFiles: pathFiles,
      clinicaId: clinicaId,
      myCustomVars2: myCustomVars2
    };
  }
}
