import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPodcastComponent } from '../podcast/listaPodcast/listaPodcast.component';
import { CapituloDetailComponent } from './capitulo-detail/capitulo-detail.component';
import { ListaCapituloComponent } from './listaCapitulo/listaCapitulo.component';





const routes: Routes = [{
    path: 'podcasts/:id/capitulos',
    children: [
      {
        path: 'list',
        component: ListaCapituloComponent
      },
      {
        path: ':capid',
        component: CapituloDetailComponent
      }

    ]
  },{path:'capitulos/list',component: ListaCapituloComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapituloRoutingModule { }
