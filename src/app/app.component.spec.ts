import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { ListaCapituloComponent } from './capitulo/listaCapitulo/listaCapitulo.component';
import { CacionListComponent } from './cacion/cacion-list/cacion-list.component';

import { ListaPodcastComponent } from './podcast/listaPodcast/listaPodcast.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        AlbumListComponent,
        ListaPodcastComponent,
        ListaCapituloComponent,
        CacionListComponent
      ],
    }).compileComponents();
  });

 it('should create the app', () => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app).toBeTruthy();
 });

  it(`should have as title 'musica-front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('musica-front');
  });

});
