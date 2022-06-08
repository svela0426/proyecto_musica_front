import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { AlbumDetail } from '../album-detail';
import { Creador } from 'src/app/Creador/creador';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums : Array<AlbumDetail> = [];

  selectedAlbum!: AlbumDetail;
  searchNotFound: Boolean = false;

  albumSearch: string = "";

  constructor(private albumService : AlbumService,
    private router: Router, private route: ActivatedRoute) { }

  getAlbums(): void {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

  ngOnInit() {
    this.getAlbums();
    console.log(this.albums);
  }

  generateArtistsText(album:AlbumDetail):string{
    var artists: Array<Creador> = album.artistas;
    var text: string = "";
    if(artists.length>3){
      text = "Varios Artistas";
    } else if(artists.length>0) {
      for(var i:number =0; i<(artists.length-1);i++){
        text+=artists[i].nombre + ", ";
      }
      text+=artists[artists.length-1].nombre;
    }
    return text;
  }

  buscarAlbum():void{
    console.log('the text read is ',this.albumSearch);
    let searchText:string = this.albumSearch.toLowerCase();
    let found:boolean = false;
    for(var i=0; i<this.albums.length;i++){
      var currAlbum = this.albums[i];
      if(currAlbum.titulo.toLowerCase() == searchText){
        found = true;
        this.selectedAlbum=currAlbum;
        break;
      }
    }
    if(found){
      this.searchNotFound=false;
      this.router.navigate([`/albums/${this.selectedAlbum.id}`], { relativeTo: this.route });
    }
    else{
      this.searchNotFound=true;
    }

  }

}
