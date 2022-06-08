import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Creador } from './creador';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreadorService {
  private apiUrl: string = environment.baseUrl + 'creadores';
  constructor(private http: HttpClient) { }

  getCreadores(): Observable<Creador[]> {
    return this.http.get<Creador[]>(this.apiUrl);
  }
}
