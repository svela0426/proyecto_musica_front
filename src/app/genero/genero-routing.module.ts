import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneroListComponent } from './genero-list/genero-list.component';
import { GeneroDetailComponent } from './genero-detail/genero-detail.component';



const routes: Routes = [{
  path: 'generos',
  children: [
    {
      path: 'list',
      component: GeneroListComponent
    },
    {
      path: ':id',
      component: GeneroDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneroRoutingModule { }
