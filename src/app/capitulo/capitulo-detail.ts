import { Podcast } from "../podcast/podcast";
import { Capitulo } from "./capitulo";

export class CapituloDetail extends Capitulo{
  constructor(fechaPublicacion: any,podcast: Podcast,id: number,titulo: string,imagen: string,duracion: number){
    super(fechaPublicacion,podcast,id,titulo,imagen,duracion);
  }
}
