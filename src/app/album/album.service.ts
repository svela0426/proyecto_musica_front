import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AlbumDetail } from './album-detail';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl: string = environment.baseUrl + 'albums';

  constructor(private http: HttpClient) { }

  getAlbums() : Observable<AlbumDetail[]> {
    return this.http.get<AlbumDetail[]>(this.apiUrl)
  }

  getAlbum(id: string): Observable<AlbumDetail> {
    return this.http.get<AlbumDetail>(this.apiUrl + "/" + id);
  }

}
