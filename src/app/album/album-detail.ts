import { Album } from "./album";
import { Genero } from "../genero/genero";
import { Creador } from "../Creador/creador";
import { Cacion } from "../cacion/cacion";

export class AlbumDetail extends Album {
  artistas: Array<Creador> = [];
  canciones: Array<Cacion> = [];
  generos: Array<Genero> = [];

  constructor(
    id: number,
    titulo: string,
    imagen: string,
    artistas: Array<Creador>,
    canciones: Array<Cacion>,
    generos: Array<Genero>
  ) {
    super(id, titulo, imagen);
    this.artistas = artistas;
    this.canciones = canciones;
    this.generos = generos;
  }
}
