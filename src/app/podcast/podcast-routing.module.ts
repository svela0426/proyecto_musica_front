import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapituloDetailComponent } from '../capitulo/capitulo-detail/capitulo-detail.component';
import { ListaPodcastComponent } from './listaPodcast/listaPodcast.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';




const routes: Routes = [{
    path: 'podcasts',
    children: [
      {
        path: 'list',
        component: ListaPodcastComponent
      },
      {
        path: ':id',
        component: PodcastDetailComponent
      },
      {
        path: ':id/capitulos/:capid',
        component: CapituloDetailComponent
      },

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastRoutingModule { }
