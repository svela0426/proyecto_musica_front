import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album/album';
import { GeneroDetail } from '../genero-detail';
import { GeneroService } from '../genero.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css']
})
export class GeneroListComponent implements OnInit {

  selectedGenero!: GeneroDetail;
  searchNotFound = false;
  generoSearch: string ="";

  generos: Array<GeneroDetail> = [];

  constructor(private generoService: GeneroService,
    private router: Router, private route: ActivatedRoute) { }

  getGeneros(): void {
    this.generoService.getGeneros().subscribe((generos) => {
      this.generos = generos;
    });
  }

  onSelected(genero: GeneroDetail): void {
    this.searchNotFound = true;
    this.selectedGenero = genero;
  }

  ngOnInit() {
    this.getGeneros();
  }

  buscarGenero():void{
    console.log('the text read is ',this.generoSearch);
    let searchText:string = this.generoSearch.toLowerCase();
    let found:boolean = false;
    for(var i=0; i<this.generos.length;i++){
      var currGenero = this.generos[i];
      if(currGenero.nombre.toLowerCase() == searchText){
        found = true;
        this.selectedGenero=currGenero;
        break;
      }
    }
    if(found){
      this.searchNotFound=false;
      this.router.navigate([`/generos/${this.selectedGenero.id}`], { relativeTo: this.route });
    }
    else{
      this.searchNotFound=true;
    }
  }

}
