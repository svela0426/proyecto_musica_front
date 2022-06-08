import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumDetail } from 'src/app/album/album-detail';
import { AlbumDetailComponent } from 'src/app/album/album-detail/album-detail.component';
import { Creador } from 'src/app/Creador/creador';
import { GeneroDetail } from '../genero-detail';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-genero-detail',
  templateUrl: './genero-detail.component.html',
  styleUrls: ['./genero-detail.component.css']
})
export class GeneroDetailComponent implements OnInit {

  @Input() generoDetail!: GeneroDetail;
  generoId!: string;

  constructor(
    private route: ActivatedRoute,
    private generoService: GeneroService
    ) {}

  getGenero(){
    this.generoService.getGenero(this.generoId).subscribe(genero=>{
      this.generoDetail = genero;
      })
    }

  ngOnInit() {
    if(this.generoDetail === undefined){
      this.generoId = this.route.snapshot.paramMap.get('id')!
      if (this.generoId) {
        this.getGenero();
      }
    }
  }



}
