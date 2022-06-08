import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Podcast } from '../podcast';
import { PodcastDetail } from '../podcast-detail';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-listaPodcast',
  templateUrl: './listaPodcast.component.html',
  styleUrls: ['./listaPodcast.component.css']
})
export class ListaPodcastComponent implements OnInit {
  searchText: any;
  podcasts: Array<PodcastDetail> = [];
  selected: Boolean = false;
  selectedPodcast!: PodcastDetail;
  constructor(private podcastService: PodcastService) { }

  getPodcasts(): void{
    this.podcastService.getPodcasts().subscribe((podcasts) => {
      this.podcasts = podcasts;
    });

  }

  ngOnInit() {
    this.getPodcasts();
  }

  onSelected(podcast: PodcastDetail): void {
    this.selected = true;
    this.selectedPodcast = podcast;
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
