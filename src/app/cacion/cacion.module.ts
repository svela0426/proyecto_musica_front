import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacionListComponent } from './cacion-list/cacion-list.component';
import { CacionDetailComponent } from './cacion-detail/cacion-detail.component';
import { RouterModule } from '@angular/router';
import { CacionRoutingModule } from './cacion-routing.module';




@NgModule({
  declarations: [
    CacionListComponent, CacionDetailComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    CacionRoutingModule
  ],
  exports : [CacionListComponent]

})
export class CacionModule { }
