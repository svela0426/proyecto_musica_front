import { Creador } from "./creador";

export class CreadorDetail extends Creador {
  //podcasts: Array<Podcast> = [];
  //albumes: Array<album> = [];

  constructor(
    id: number,
    nombre: string,
    nacionalidad: string,
    imagen: string ,
    //albumes: Array<album>
    //podcasts: Array<podcast>
  ) {
    super(id, nombre, nacionalidad, imagen);
    //this.podcasts = podcasts;
    //this.albumes = albumes;
  }
}