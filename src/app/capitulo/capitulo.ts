import { Podcast } from "../podcast/podcast";

export class Capitulo {

  fechaPublicacion: any;
  podcast: Podcast;
  id: number;
	titulo: string;
    imagen: string;
    duracion: number;

    constructor(fechaPublicacion: any,podcast: Podcast,id: number,titulo: string,imagen: string,duracion: number)
    {
         this.titulo= titulo;
         this.fechaPublicacion= fechaPublicacion;
         this.podcast= podcast;
         this.id= id;
         this.imagen= imagen;
         this.duracion= duracion;
    }
}
