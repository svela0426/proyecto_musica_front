import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { RouterModule } from '@angular/router';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import {  AlbumRoutingModule } from './album-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlbumRoutingModule,
    FormsModule
  ],
  exports : [AlbumListComponent],
  declarations: [AlbumListComponent, AlbumDetailComponent]
})
export class AlbumModule { }
