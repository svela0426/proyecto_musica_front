import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Podcast } from './podcast';
import { Observable } from 'rxjs';
import { PodcastDetail } from './podcast-detail';


@Injectable({
  providedIn: 'root'
})
export class PodcastService {
private apiUrl: string = environment.baseUrl + 'podcasts';

constructor(private http: HttpClient) { }

getPodcasts(): Observable<PodcastDetail[]> {
  return this.http.get<PodcastDetail[]>(this.apiUrl);
}

getPodcast(id:string): Observable<PodcastDetail> {
  return this.http.get<PodcastDetail>(this.apiUrl + "/"+id);
}

}
