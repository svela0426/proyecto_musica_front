import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { ListaPodcastComponent } from './podcast/listaPodcast/listaPodcast.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaCapituloComponent } from './capitulo/listaCapitulo/listaCapitulo.component';

import { AppComponent } from './app.component';

const routes: Routes = [{ path: '', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
