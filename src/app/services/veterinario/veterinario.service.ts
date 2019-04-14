import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  uri = 'http://localhost:4000/veterinario';

  constructor(
    private http: HttpClient,
  ) { 

  }
}
