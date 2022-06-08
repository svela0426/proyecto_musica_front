import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastDetail} from '../podcast-detail';
import { PodcastService } from '../podcast.service';


@Component({
 selector: 'app-podcast-detail',
 templateUrl: './podcast-detail.component.html',
 styleUrls: ['./podcast-detail.component.css']
})
export class PodcastDetailComponent implements OnInit {
 podcastId!: string;
 @Input() podcastDetail!: PodcastDetail;

 constructor(
   private route: ActivatedRoute,
   private podcastService: PodcastService
 ) { }

 getPodcast (){
   this.podcastService.getPodcast(this.podcastId).subscribe(podcast=>{
     this.podcastDetail= podcast;
   })
 }

 ngOnInit() {
  if(this.podcastDetail === undefined){
    this.podcastId = this.route.snapshot.paramMap.get('id')!
    if (this.podcastId) {
      this.getPodcast();
    }
  }
 }

}
