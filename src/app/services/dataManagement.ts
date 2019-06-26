import { Injectable } from '@angular/core';
import { RestWS } from './restService';
import { Usuario, Ajustes, Global, Veterinario, Clinica, Mascota, Tratamiento, Prueba, Contacto, Vacuna, Desparasitacion, Analitica } from '../app.dataModels';
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

  public updateClinica(clinica: Clinica): Promise<any> {
    return this.restService.updateClinica(clinica).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getClinicaById(id: string): Promise<any> {
    return this.restService.getClinicaById(id).then((data: any) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getUsuarios(filters?): Promise<any> {
    return this.restService.getUsuarios(filters).then((data: string) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public createUsuario(usuario: Usuario): Promise<any> {
    return this.restService.createUsuario(usuario).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public updateUsuario(usuario: Usuario): Promise<any> {
    return this.restService.updateUsuario(usuario).then((data) => {
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

  public createCliente(cliente: Cliente): Promise<any> {
    return this.restService.createCliente(cliente).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public updateCliente(cliente: Cliente): Promise<any> {
    return this.restService.updateCliente(cliente).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getTratamientoByMascotaId(mascotaId: string): Promise<any> {
    return this.restService.getTratamientoByMascotaId(mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public createTratamiento(tratamiento: Tratamiento, mascotaId: string): Promise<any> {
    return this.restService.createTratamiento(tratamiento, mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public updateTratamiento(tratamiento: Tratamiento, mascotaId: string): Promise<any> {
    return this.restService.updateTratamiento(tratamiento, mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getPruebaByMascotaId(mascotaId: string): Promise<any> {
    return this.restService.getPruebaByMascotaId(mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public createPrueba(prueba: Prueba, mascotaId: string): Promise<any> {
    return this.restService.createPrueba(prueba, mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getContactos(clienteId: string): Promise<any> {
    return this.restService.getContactos(clienteId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public addContacto(clienteId: string, contacto: Contacto): Promise<any> {
    return this.restService.addContacto(clienteId, contacto).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public deleteContacto(clienteId: string, contactoId: string): Promise<any> {
    return this.restService.deleteContacto(clienteId, contactoId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getVacunaByMascotaId(mascotaId: string): Promise<any> {
    return this.restService.getVacunaByMascotaId(mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public createVacuna(vacuna: Vacuna, mascotaId: string): Promise<any> {
    return this.restService.createVacuna(vacuna, mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getDesparasitacionByMascotaId(mascotaId: string): Promise<any> {
    return this.restService.getDesparasitacionByMascotaId(mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public createDesparasitacion(desparasitacion: Desparasitacion, mascotaId: string): Promise<any> {
    return this.restService.createDesparasitacion(desparasitacion, mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public getAnaliticaByMascotaId(mascotaId: string): Promise<any> {
    return this.restService.getAnaliticaByMascotaId(mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }

  public createAnalitica(analitica: Analitica, mascotaId: string): Promise<any> {
    return this.restService.createAnalitica(analitica, mascotaId).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject('error');
    });
  }


}
