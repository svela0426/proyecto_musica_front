import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemaListComponent } from './Tema-list/tema-list.component';
import { TemaDetailComponent } from './tema-detail/tema-detail.component';



const routes: Routes = [{
  path: 'temas',
  children: [
    {
      path: 'list',
      component: TemaListComponent
    },
    {
      path: ':id',
      component: TemaDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemaRoutingModule { }
