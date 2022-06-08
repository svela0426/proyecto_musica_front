import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCapituloComponent } from '../capitulo/listaCapitulo/listaCapitulo.component';
import { ListaPodcastComponent } from './listaPodcast/listaPodcast.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { RouterModule } from '@angular/router';
import { PodcastRoutingModule } from './podcast-routing.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PodcastRoutingModule
  ],
  declarations: [ListaPodcastComponent,PodcastDetailComponent],
  exports: [ListaPodcastComponent]
})
export class PodcastModule { }
