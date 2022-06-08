import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GeneroDetail } from './genero-detail';
import { AlbumService } from '../album/album.service';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl: string = environment.baseUrl + 'generos';

  constructor(private http: HttpClient) { }

  getGeneros(): Observable<GeneroDetail[]> {
    return this.http.get<GeneroDetail[]>(this.apiUrl);
  }

  getGenero(id: string): Observable<GeneroDetail> {
    return this.http.get<GeneroDetail>(this.apiUrl + "/" + id);
  }

}
