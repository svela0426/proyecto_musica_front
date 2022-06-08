import { Cacion } from "./cacion";


export class CacionDetail extends Cacion {


    constructor(
        titulo: string,
        duracion: number,
        link:string,
        portada:string
     ) 
    {
        super(titulo,duracion,link,portada);
        
    }

}

