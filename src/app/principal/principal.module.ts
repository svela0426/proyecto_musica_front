import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PrincipalRoutingModule } from './principal-routing.module';


import { PrincipalComponent } from './principal.component';



import { AlbumModule } from '../album/album.module';
import { GeneroModule } from '../genero/genero.module';
import { TemaModule } from '../Tema/tema.module';
import { CreadorModule } from '../Creador/creador.module';
import { CapituloModule } from '../capitulo/capitulo.module';
import { PodcastModule } from '../podcast/podcast.module';
import { CacionModule } from '../cacion/cacion.module';

import { AlbumRoutingModule } from '../album/album-routing.module';
import { PodcastRoutingModule } from '../podcast/podcast-routing.module';





@NgModule({
  declarations: [
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    PrincipalRoutingModule,
    AlbumModule,
    GeneroModule,
    TemaModule,
    CreadorModule,
    PodcastModule,
    CapituloModule,
    CacionModule,
    HttpClientModule

  ]

})
export class PrincipalModule { }