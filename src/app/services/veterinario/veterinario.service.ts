import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VETERINARIOS } from '../../mock-data';
import { Veterinario } from '../../app.dataModels';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  uri = 'http://localhost:4000/veterinario';

  constructor(
    private http: HttpClient,
  ) { }
  

  getVeterinarios(): Observable<Veterinario[]> {
    return of(VETERINARIOS);
  }

  getVeterinario(id: number): Observable<Veterinario> {
    return of(VETERINARIOS.find(veterinario => veterinario.id === id));
  }
}
