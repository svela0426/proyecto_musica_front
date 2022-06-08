import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tema } from './tema';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private apiUrl: string = environment.baseUrl + 'temas';
  constructor(private http: HttpClient) { }

  getTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>(this.apiUrl);
  }
}
