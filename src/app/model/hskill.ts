export class Hskill {
    id?: number;
    nombre: string;
    porcentaje: string;
    img: string;
    color: string;

    constructor(nombre: string, porcentaje: string, img: string, color: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.img = img;
        this.color = color;
    }
}