import { Injectable } from '@angular/core';
import { RestWS } from './restService';
import { Usuario, Ajustes, Global, Veterinario, Mascota } from '../app.dataModels';
import { Cliente } from '../app.dataModels';

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

  public getClients(filters?): Promise<Cliente[]> {
    return this.restService.getClients(filters).then((data: Cliente[]) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getCliente(id: string): Promise<any> {
    return this.restService.getCliente(id).then((data: string) => {
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
    return this.restService.getMascotas(filters).then((data: string) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getVeterinarios(filters?): Promise<any> {
    return this.restService.getVeterinarios(filters).then((data: string) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getVeterinario(id: string): Promise<any> {
    return this.restService.getVeterinario(id).then((data: any) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public updateVeterinario(veterinario: Veterinario): Promise<any> {
    return this.restService.updateVeterinario(veterinario).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public deleteVeterinario(id: string): Promise<any> {
    return this.restService.deleteVeterinario(id).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public createVeterinario(veterinario: Veterinario): Promise<any> {
    return this.restService.createVeterinario(veterinario).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public createMascota(mascota: Mascota): Promise<any> {
    return this.restService.createMascota(mascota).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public updateMascota(mascota: Mascota): Promise<any> {
    return this.restService.updateMascota(mascota).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }
}
