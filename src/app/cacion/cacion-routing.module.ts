import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CacionListComponent } from './cacion-list/cacion-list.component';
import {  CacionDetailComponent } from './cacion-detail/cacion-detail.component';


const routes: Routes = [{
  path: 'cacions',
  children: [
    {
      path: 'list',
      component: CacionListComponent
    },
    {
      path: ':id',
      component: CacionDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CacionRoutingModule { }
