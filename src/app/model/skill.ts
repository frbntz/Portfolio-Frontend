export class Skill {
    id?: number;
    nombre: string;
    softSkill: string;

    constructor(nombre: string, softSkill: string) {
        this.nombre = nombre;
        this.softSkill = softSkill;
    }
}