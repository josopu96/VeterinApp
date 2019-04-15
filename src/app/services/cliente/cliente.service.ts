import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CLIENTES } from '../../mock-data';
import { Cliente } from '../../app.dataModels';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
  }

  getCliente(id: number): Observable<Cliente> {
    return of(CLIENTES.find(cliente => cliente.id === id));
  }
}

