import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Capitulo } from './capitulo';

@Injectable({
 providedIn: 'root'
})
export class CapituloService {

 private apiUrl: string = environment.baseUrl;

 constructor(private http: HttpClient) { }

 getCapitulos(pod:number): Observable<Capitulo[]> {
   return this.http.get<Capitulo[]>(this.apiUrl+"podcasts/"+pod+"/capitulos");
 }

 getCapitulo(idcap:string, idpod:string): Observable<Capitulo> {
  return this.http.get<Capitulo>(this.apiUrl+"podcasts/"+idpod+"/capitulos/"+idcap);
}


}
