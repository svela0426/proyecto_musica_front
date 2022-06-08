import { Capitulo } from "../capitulo/capitulo";
import { Podcast } from "./podcast";

export class PodcastDetail extends Podcast {

  capitulos: Array<Capitulo> = [];

  constructor(id: number, titulo: string, calificacion: string,imagen: string,  descripcion: string, precio: number,capitulos: Array<Capitulo>){
    super(id,titulo,calificacion,imagen,descripcion,precio);

    this.capitulos= capitulos;
  }
}
