import { Alumno } from "./alumno";

export class Docente {
    private nombreCompleto: string;
    private alumnos: Alumno[];

    constructor(nombreCompleto: string, alumnos: Alumno[]) {
        this.nombreCompleto = nombreCompleto;
        this.alumnos = alumnos;
    }

    public getNombreCompleto(): string {
        return this.nombreCompleto;
    }

    public setNombreCompleto(nombreCompleto: string) {
        this.nombreCompleto = nombreCompleto;
    }

    public getAlumno(posicion: number): Alumno {
        return this.alumnos[posicion];
    }

    public getAlumnos(): string {
        let infoAlumnos: string = ``;
        this.alumnos.forEach(alumno => {
            infoAlumnos += `${alumno.getNombreCompleto()}\n`;
        })
        return infoAlumnos;
    }

    public matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    public expulsarAlumno(posicion: number): void {
        this.alumnos.splice(posicion, 1);
    }
}   