import { Component, OnInit } from '@angular/core';
import { Podcast } from 'src/app/podcast/podcast';
import { PodcastDetail } from 'src/app/podcast/podcast-detail';
import { PodcastService } from 'src/app/podcast/podcast.service';
import { Capitulo } from '../capitulo';
import { CapituloService } from '../capitulo.service';

@Component({
  selector: 'app-listaCapitulo',
  templateUrl: './listaCapitulo.component.html',
  styleUrls: ['./listaCapitulo.component.css']
})
export class ListaCapituloComponent implements OnInit {
  podcasts: Array<PodcastDetail> = [];
  capitulos: Array<Capitulo> = [];
  size=0;

  constructor(private podcastService: PodcastService,private capituloService: CapituloService) { }
  selected: Boolean = false;
  selectedCapitulo!: Capitulo;
  getPodcasts(): void{
    this.podcastService.getPodcasts().subscribe((podcasts) => {
      this.size= podcasts.length;
      this.podcasts = podcasts;
      this.getCapitulos(this.size);
    });

  }

  getCapitulos(pod: number): void {
    for (let i = 0; i < pod; i++) {
      let numb= i+1;
      this.capituloService.getCapitulos(numb).subscribe((capitulos) => {
        this.capitulos.push.apply(this.capitulos , capitulos);
      });
    }

  }



  ngOnInit() {
    this.getPodcasts();


  }
  onSelected(capitulo: Capitulo): void {
    this.selected = true;
    this.selectedCapitulo = capitulo;
  }

  filtro() {

    var  divp, imgp, i, txtValue;

    var filter = (<HTMLInputElement>document.getElementById('myInput')).value.toUpperCase();

    divp = <HTMLElement>document.getElementById("cont");
    imgp = divp!.getElementsByClassName("col mb-2");

    for (i = 0; i < imgp.length; i++) {
      txtValue = imgp[i].id;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        (<HTMLElement>imgp[i]).style.display = "";
      } else {
        (<HTMLElement>imgp[i]).style.display = "none";
      }
    }
  }

}





