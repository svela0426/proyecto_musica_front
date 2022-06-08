
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Capitulo } from '../capitulo';
import { CapituloService } from '../capitulo.service';

@Component({
  selector: 'app-capitulo-detail',
  templateUrl: './capitulo-detail.component.html',
  styleUrls: ['./capitulo-detail.component.css']
})
export class CapituloDetailComponent implements OnInit {

  capituloId!: string;
  podcastId!: string;
  @Input() capituloDetail!: Capitulo;

  constructor( private route: ActivatedRoute,
    private capituloService: CapituloService) { }

    getCapitulo(){
      this.capituloService.getCapitulo(this.capituloId,this.podcastId).subscribe(capitulo=>{
        this.capituloDetail = capitulo;
      })
    }

  ngOnInit() {

    if(this.capituloDetail === undefined){
      this.capituloId = this.route.snapshot.paramMap.get('capid')!
      this.podcastId = this.route.snapshot.paramMap.get('id')!
      if (this.capituloId) {
        this.podcastId = this.route.snapshot.paramMap.get('id')!
        this.getCapitulo();
      }
    }
  }

}
