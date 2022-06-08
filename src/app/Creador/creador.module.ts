import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreadorComponent } from './creador.component';
import { CreadorListComponent } from './creador-list/creador-list.component';
import { CreadorDetailComponent } from './creador-detail/creador-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [CreadorListComponent],
  declarations: [CreadorComponent, CreadorListComponent, CreadorDetailComponent]
})
export class CreadorModule { }