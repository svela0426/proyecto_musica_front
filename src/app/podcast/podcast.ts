export class Podcast{
  id: number;
  titulo: string;
  calificacion: string;
  imagen: string;
  descripcion: string;
  precio: number;

  constructor(id: number, titulo: string, calificacion: string,imagen: string,  descripcion: string, precio: number){
    this.id= id;
    this.titulo= titulo;
    this.calificacion= calificacion;
    this.imagen= imagen;
    this.descripcion= descripcion;
    this.precio= precio;
  }
}
