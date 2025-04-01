import { Alumno } from "./alumno";

export class Docente {
    private nombreCompleto: string;
    private alumnos: Alumno[];

    constructor(nombreCompleto: string) {
        this.nombreCompleto = nombreCompleto;
        this.alumnos = new Array();
    }

    public getNombreCompleto(): string {
        return this.nombreCompleto;
    }

    public setNombreCompleto(nombreCompleto: string) {
        this.nombreCompleto = nombreCompleto;
    }

    public getAlumno(alumno: Alumno): Alumno {
        let posicion: number = this.alumnos.indexOf(alumno);
        if (posicion !== -1) {
            return this.alumnos[posicion];
        }
        else throw new Error("Alumno no encontrado");
    }

    public getAlumnos(): string {
        let infoAlumnos: string = ``;
        this.alumnos.forEach(alumno => {
            infoAlumnos += `${alumno.getNombreCompleto()}\n`;
        })
        return infoAlumnos;
    }

    public vincularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    public desvincularAlumno(alumno:Alumno): void {
        let posicion: number = this.alumnos.indexOf(alumno);
        if (posicion !== -1) {
        this.alumnos.splice(posicion, 1);
    } else throw new Error("Alumno no encontrado");
    
}
}   