import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cacion } from 'src/app/cacion/cacion';
import { Creador } from 'src/app/Creador/creador';
import { Album } from '../album';
import { AlbumDetail } from '../album-detail';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  albumId!: string;
  @Input() albumDetail!: AlbumDetail;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  getAlbum(){
    this.albumService.getAlbum(this.albumId).subscribe(album=>{
      this.albumDetail = album;
    })
  }

  ngOnInit() {
    if(this.albumDetail === undefined){
      this.albumId = this.route.snapshot.paramMap.get('id')!
      if (this.albumId) {
        this.getAlbum();
      }
    }
  }

  generateArtistsText(album:AlbumDetail):string{
    var artists: Array<Creador> = album.artistas;
    var text: string = "";
    if(artists.length>3){
      text = "Varios Artistas";
    }
    else if(artists.length>0){
      for(var i:number =0; i<(artists.length-1);i++){
        text+=artists[i].nombre + ", ";
      }
      text+=artists[artists.length-1].nombre;
    }
    return text;
  }

  generateSongDurationText(song:Cacion):string{
    let duration:number = song.duracion;
    let minutes:number = Math.floor(duration/60);
    let seconds:number = duration-((minutes)*60);

    let returnString:string = minutes.toString()+":"+seconds.toString().padStart(2,'0');

    return returnString;
  }

}
