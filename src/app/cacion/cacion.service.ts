import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cacion } from './cacion';


@Injectable({
  providedIn: 'root'
})
export class CacionService {

  private apiUrl: string = environment.baseUrl + 'canciones';

  constructor(private http: HttpClient) { }

  getCanciones(): Observable<Cacion[]> {
    return this.http.get<Cacion[]>(this.apiUrl);
  }
}
