import { Album } from "../album/album";
import { Genero } from "./genero";

export class GeneroDetail extends Genero {
  albumes: Array<Album> = [];

  constructor(
    id: number,
    nombre: string,
    albumes: Array<Album>
  ) {
    super(id, nombre);
    this.albumes = albumes;
  }
}
