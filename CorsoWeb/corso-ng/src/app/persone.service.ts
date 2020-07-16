import { Injectable } from '@angular/core';
import { Persone } from './model/persone';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersoneService {

  constructor(
    private http: HttpClient,
  ) { }

  elencoPersone(): Observable<Persone[]> {
    return this.http.get<Persone[]>('http://localhost:51150/persone');
  }

}
