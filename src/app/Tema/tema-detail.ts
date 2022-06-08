import { Tema } from "./tema";
import { Podcast } from "../podcast/podcast";

export class TemaDetail extends Tema {
  podcasts: Array<Podcast> = [];
  temas: Array<Tema> = [];

  constructor(
    id: number,
    nombre: string,
    podcasts: Array<Podcast>,
    temas: Array<Tema>
  )
  {
    super(id, nombre);
    this.podcasts = podcasts;
    this.temas = temas;
  }
}
