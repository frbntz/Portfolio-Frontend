export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    about: string;

    constructor(nombre: string, apellido: string, img: string, about: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.about = about;
    } 
}