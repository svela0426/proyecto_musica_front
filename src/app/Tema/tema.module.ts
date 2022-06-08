import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemaComponent } from './tema.component';
import { TemaListComponent } from './Tema-list/tema-list.component';
import { TemaDetailComponent } from './tema-detail/tema-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [TemaListComponent],
  declarations: [TemaComponent, TemaListComponent, TemaDetailComponent]
})
export class TemaModule { }