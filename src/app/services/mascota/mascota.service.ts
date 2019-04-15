import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MASCOTAS } from '../../mock-data';
import { Mascota } from '../../app.dataModels';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor() { }

  getMascotas(): Observable<Mascota[]> {
    return of(MASCOTAS);
  }

  getMascota(id: number): Observable<Mascota> {
    return of(MASCOTAS.find(mascota => mascota.id === id));
  }
}
