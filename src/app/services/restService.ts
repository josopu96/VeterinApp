import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from './../../config/configService';
import { AbstractWS } from './abstractService';
import { Injectable } from '@angular/core';
import { Usuario, Ajustes, Global, Veterinario, Clinica, Mascota, Tratamiento, Prueba, Contacto } from '../app.dataModels';
import { Cliente } from '../app.dataModels';

@Injectable()
export class RestWS extends AbstractWS {
  path = '';
  clinicaId = '';

  constructor(
    private config: ConfigService,
    http: HttpClient,
  ) {
    super(http);
    this.path = this.config.config().restUrlPrefix;
    this.clinicaId = this.config.config().clinicaId;
  }
  // Methods
  public login(email, clave) {
    const fd = new HttpParams().set('email', email).set('clave', clave);
    return this.makePostRequest(this.path + 'usuarios/login', fd).then((res: Usuario) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getClients(filters?): Promise<Cliente[]> {
    const fd = new HttpParams();
    if (filters) {
      fd.set('filters', filters);
    }
    return this.makeGetRequest(this.path + 'clientes', fd).then((res: Cliente[]) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getCliente(id: string) {
    const fd = new HttpParams();
    return this.makeGetRequest(this.path + 'clientes/' + id, fd).then((res: String) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getUserByToken(token: string) {
    const fd = new HttpParams();
    return this.makeGetRequest(this.path + 'usuarios/token/' + token, fd).then((res: Usuario) => {
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
      return Promise.reject(error);
    });
  }

  public getVeterinarios(filters?) {
    const fd = new HttpParams();
    if (filters) {
      fd.set('filters', filters);
    }
    return this.makeGetRequest(this.path + 'clinicas/' + this.clinicaId + '/veterinarios', fd).then((res: String) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getVeterinario(id: string): Promise<Veterinario> {
    return this.makeGetRequest(this.path + 'clinicas/' + this.clinicaId + '/veterinario/' + id, null).then((res: Veterinario) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public updateVeterinario(veterinario: Veterinario) {
    let fd = new HttpParams()
      .set('nombre', veterinario.nombre)
      .set('apellidos', veterinario.apellidos)
      .set('dni', veterinario.dni)
      .set('telefono', veterinario.telefono)
      .set('numColegiado', veterinario.numColegiado.toString())
      .set('fecModificacion', String(new Date()));

      if (veterinario.fecNac) {
        fd = fd.append('fecNac', String(veterinario.fecNac));
      }

    return this.makePostRequest(this.path + 'clinicas/' + this.clinicaId + '/veterinario/' + veterinario._id + '/update', fd).then((_) => {
      return Promise.resolve();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public deleteVeterinario(id: string) {
    return this.makePostRequest(this.path + 'clinicas/' + this.clinicaId + '/veterinario/' + id + '/delete', null).then((_) => {
      return Promise.resolve();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public createVeterinario(veterinario: Veterinario) {
    let fd = new HttpParams()
      .set('nombre', veterinario.nombre)
      .set('apellidos', veterinario.apellidos)
      .set('dni', veterinario.dni)
      .set('telefono', veterinario.telefono)
      .set('numColegiado', String(veterinario.numColegiado));

      if (veterinario.fecNac) {
        fd = fd.append('fecNac', String(veterinario.fecNac));
      } else {
        fd = fd.append('fecNac', null);
      }

    return this.makePostRequest(this.path + 'clinicas/' + this.clinicaId + '/veterinario/create', fd).then((_) => {
      return Promise.resolve();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public updateClinica(clinica: Clinica) {
    let fd = new HttpParams()
      .set('cif', clinica.cif)
      .set('nombre', clinica.nombre)
      .set('direccion', clinica.direccion)
      .set('provincia', clinica.provincia)
      .set('poblacion', clinica.poblacion)
      .set('codPostal', String(clinica.codPostal))
      .set('pais', clinica.pais)
      .set('propietario', clinica.propietario)
      .set('dniPropietario', clinica.dniPropietario);

      if (clinica.telefono) {
        fd = fd.append('telefono', clinica.telefono);
      } else {
        fd = fd.append('telefono', '');
      }
      if (clinica.movil) {
        fd = fd.append('movil', clinica.movil);
      } else {
        fd = fd.append('movil', '');
      }
      if (clinica.fax) {
        fd = fd.append('fax', clinica.fax);
      } else {
        fd = fd.append('fax', '');
      }
      if (clinica.web) {
        fd = fd.append('web', clinica.web);
      } else {
        fd = fd.append('web', '');
      }
      if (clinica.email) {
        fd = fd.append('email', clinica.email);
      } else {
        fd = fd.append('email', '');
      }
      if (clinica.imagen) {
        fd = fd.append('imagen', encodeURIComponent(clinica.imagen));
      } else {
        fd = fd.append('imagen', '');
      }
    return this.makePostRequest(this.path + 'clinicas/' + this.clinicaId + '/update', fd).then((_) => {
      return Promise.resolve();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getClinicaById(id: string) {
    const fd = new HttpParams();

    return this.makeGetRequest(this.path + 'clinicas/' + this.clinicaId, fd).then((res: String) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getUsuarios(filters?) {
    const fd = new HttpParams();
    if (filters) {
      fd.set('filters', filters);
    }
    return this.makeGetRequest(this.path + 'usuarios/', fd).then((res: String) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public createUsuario(usuario: Usuario) {
    const fd = new HttpParams()
      .set('nombre', usuario.nombre)
      .set('clave', usuario.clave)
      .set('email', usuario.email)
      .set('isAdmin', usuario.isAdmin + "");
    return this.makePostRequest(this.path + 'usuarios/create', fd).then((res) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public updateUsuario(usuario: Usuario) {
    let fd = new HttpParams()
      .set('nombre', usuario.nombre)
      .set('isAdmin', usuario.isAdmin + "")
      .set('email', usuario.email);

      if (usuario.clave && usuario.oldClave) {
        fd = fd.append('oldClave', usuario.oldClave);
        fd = fd.append('clave', usuario.clave);
      }
    return this.makePostRequest(this.path + 'usuarios/' + usuario._id + '/update', fd).then((_) => {
      return Promise.resolve();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public createMascota(mascota: Mascota) {
    let fd = new HttpParams()
      .set('nombre', mascota.nombre)
      .set('chip', mascota.chip)
      .set('fecNac', String(mascota.fecNac))
      .set('fecModificacion', String(new Date()))
      .set('sexo', mascota.sexo)
      .set('estado', mascota.estado)
      .set('pelo', mascota.pelo)
      .set('capa', mascota.capa)
      .set('especie', mascota.especie)
      .set('raza', mascota.raza)
      .set('idCliente', mascota.idCliente);

      if (mascota.fecBaj) {
        fd = fd.append('fecBaj', String(mascota.fecBaj));
      }
    return this.makePostRequest(this.path + 'mascotas/create', fd).then((data) => {
      return Promise.resolve(data);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public updateMascota(mascota: Mascota) {
    let fd = new HttpParams()
      .set('nombre', mascota.nombre)
      .set('chip', mascota.chip)
      .set('fecNac', String(mascota.fecNac))
      .set('sexo', mascota.sexo)
      .set('estado', mascota.estado)
      .set('pelo', mascota.pelo)
      .set('capa', mascota.capa)
      .set('especie', mascota.especie)
      .set('raza', mascota.raza)
      .set('idCliente', mascota.idCliente);

    if (mascota.fecBaj) {
      fd = fd.append('fecBaj', String(mascota.fecBaj));
    } else {
      fd = fd.append('fecBaj', null);
    }
    return this.makePostRequest(this.path + 'mascotas/' + mascota._id + '/update', fd).then(res => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public createCliente(cliente: Cliente) {
    let fd = new HttpParams()
      .set('nombre', cliente.nombre)
      .set('apellidos', cliente.apellidos)
      .set('dni', String(cliente.dni));

      if (cliente.direccion) {
        fd = fd.append('direccion', cliente.direccion);
      }
      if (cliente.poblacion) {
        fd = fd.append('poblacion', cliente.poblacion);
      }
      if (cliente.codPostal) {
        fd = fd.append('codPostal', cliente.codPostal + "");
      }
      if (cliente.email) {
        fd = fd.append('email', cliente.email);
      }
      if (cliente.fecNac) {
        fd = fd.append('fecNac', String(cliente.fecNac));
      }

    return this.makePostRequest(this.path + 'clientes/create', fd).then((_) => {
      return Promise.resolve();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public updateCliente(cliente: Cliente) {
    let fd = new HttpParams()
      .set('nombre', cliente.nombre)
      .set('apellidos', cliente.apellidos)
      .set('dni', String(cliente.dni));

      if (cliente.direccion) {
        fd = fd.append('direccion', cliente.direccion);
      }
      if (cliente.poblacion) {
        fd = fd.append('poblacion', cliente.poblacion);
      }
      if (cliente.codPostal) {
        fd = fd.append('codPostal', cliente.codPostal + "");
      }
      if (cliente.email) {
        fd = fd.append('email', cliente.email);
      }
      if (cliente.fecNac) {
        fd = fd.append('fecNac', String(cliente.fecNac));
      }

    return this.makePostRequest(this.path + 'clientes/' + cliente._id + '/update', fd).then((_) => {
      return Promise.resolve();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getTratamientoByMascotaId(mascotaId: string) {
    const fd = new HttpParams();

    return this.makeGetRequest(this.path + 'mascotas/' + mascotaId + '/tratamientos', fd).then((res: String) => {
      console.log(res);
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public createTratamiento (tratamiento: Tratamiento, mascotaId: string) {
    let fd = new HttpParams()
      .set('mascotaId', mascotaId);

    if (tratamiento.anamnesis) {
      fd = fd.append('anamnesis', tratamiento.anamnesis);
    }
    if (tratamiento.diagnostico) {
      fd = fd.append('diagnostico', tratamiento.diagnostico);
    }
    if (tratamiento.tipoTratamiento) {
      fd = fd.append('tipoTratamiento', tratamiento.tipoTratamiento);
    }
    if (tratamiento.fecha) {
      fd = fd.append('fecha', String(tratamiento.fecha));
    }

    console.log(fd);
    return this.makePostRequest(this.path + 'mascotas/addTratamiento', fd).then((_) => {
      return Promise.resolve();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public updateTratamiento(tratamiento: Tratamiento, mascotaId: string) {
    let fd = new HttpParams()
      .set('anamnesis', tratamiento.anamnesis)
      .set('diagnostico', tratamiento.diagnostico)
      .set('tipoTratamiento', tratamiento.tipoTratamiento)
      .set('fecha', String(tratamiento.fecha));

    return this.makePostRequest(this.path + 'mascotas/' + mascotaId + '/updateTratamiento/' + tratamiento._id, fd).then(res => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getPruebaByMascotaId(mascotaId: string) {
    const fd = new HttpParams();

    return this.makeGetRequest(this.path + 'mascotas/' + mascotaId + '/pruebas', fd).then((res: String) => {
      return Promise.resolve(res);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public createPrueba (prueba: Prueba, mascotaId: string) {
    let fd = new HttpParams()
      .set('mascotaId', mascotaId);

    if (prueba.concepto) {
      fd = fd.append('concepto', prueba.concepto);
    }
    if (prueba.categoria) {
      fd = fd.append('categoria', prueba.categoria);
    }
    if (prueba.tipoPrueba) {
      fd = fd.append('tipoPrueba', prueba.tipoPrueba);
    }

    return this.makePostRequest(this.path + 'mascotas/addPrueba', fd).then((_) => {
      return Promise.resolve();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  public getContactos(clienteId: string): Promise<Contacto[]> {
    const fd = new HttpParams();
    return this.makeGetRequest(this.path + 'clientes/' + clienteId + '/contactos', fd).then((res) => {
      return Promise.resolve(res);
    }).catch(err => {
      return Promise.reject(err);
    });
  }

  public addContacto(clienteId: string, contacto: Contacto): Promise<any> {
    let fd = new HttpParams();

    if (contacto.nombre) {
      fd = fd.append('nombre', contacto.nombre);
    }
    if (contacto.telefono) {
      fd = fd.append('telefono', contacto.telefono);
    }
    if (contacto.tipo) {
      fd = fd.append('tipo', contacto.tipo);
    }

    return this.makePostRequest(this.path + 'clientes/' + clienteId + '/addContacto', fd).then((_) => {
      return Promise.resolve();
    }).catch(err => {
      return Promise.reject(err);
    });
  }
}
