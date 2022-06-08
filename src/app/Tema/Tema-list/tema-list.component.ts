import { Component, OnInit } from '@angular/core';
import { Podcast } from 'src/app/podcast/podcast';
import { TemaService } from '../tema.service';
import { TemaDetail } from '../tema-detail';
import { Tema } from '../tema';


@Component({
  selector: 'app-tema-list',
  templateUrl: './tema-list.component.html',
  styleUrls: ['./tema-list.component.css'],
})
export class TemaListComponent implements OnInit {
  temas: Array<Tema> = [];

  selectedGenero!: TemaDetail;
  selected = false;

  constructor(
    private temaService: TemaService) {}

  getTemas(): void {
    console.log('entra getTemas');
    this.temaService.getTemas().subscribe((temas) => {
      this.temas = temas;
    });

  }

  onSelected(genero: TemaDetail): void {
    this.selected = true;
    this.selectedGenero = genero;
  }


  ngOnInit() {
    this.getTemas();
    console.log(this.temas);
  }

  generateCollage(tema:TemaDetail):Array<string>{
    let numPod:number = tema.podcasts.length;
    let images:Array<string> = [];
    var podcast:any;
    for(podcast in tema.podcasts){
      images.push(podcast.imagen)
    }
    return images;
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
