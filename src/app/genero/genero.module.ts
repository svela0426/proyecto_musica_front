import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroListComponent } from './genero-list/genero-list.component';
import { GeneroDetailComponent } from './genero-detail/genero-detail.component';
import { GeneroRoutingModule } from './genero-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GeneroRoutingModule,
    FormsModule
  ],
  exports: [GeneroListComponent],
  declarations: [GeneroListComponent,GeneroDetailComponent]
})
export class GeneroModule { }
