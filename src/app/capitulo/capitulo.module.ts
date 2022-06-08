import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaCapituloComponent } from './listaCapitulo/listaCapitulo.component';
import { CapituloDetailComponent } from './capitulo-detail/capitulo-detail.component';
import { RouterModule } from '@angular/router';
import { CapituloRoutingModule } from './capitulo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CapituloRoutingModule
  ],
  declarations: [ListaCapituloComponent,CapituloDetailComponent],
  exports: [ListaCapituloComponent]
})
export class CapituloModule { }
