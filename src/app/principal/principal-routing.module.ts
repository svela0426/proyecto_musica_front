import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCapituloComponent } from '../capitulo/listaCapitulo/listaCapitulo.component';
import { PrincipalComponent } from './principal.component';




const routes: Routes = [{
    path: 'principal',
    children: [
      {
        path: 'list',
        component: PrincipalComponent
      }
    ]
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PrincipalRoutingModule { }
