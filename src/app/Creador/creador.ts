export class Creador {

  id: number;
  nombre: string;
  nacionalidad: string;
  imagen: string;
  //albumes: Album[];
  //podcasts: podcast[];


  constructor(
    id: number,
    nombre: string,
    nacionalidad: string,
    imagen: string,
    //albumes: Album[],
    //podcasts: podcast[]

  ) {
    this.id = id;
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
    this.imagen = imagen;
    //this.albumes = albumes;
    // this.podcasts = podcasts;
  }
}