export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    tiempoE: string;

    constructor(nombreE: string, descripcionE: string, tiempoE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.tiempoE = tiempoE;
    }
}
