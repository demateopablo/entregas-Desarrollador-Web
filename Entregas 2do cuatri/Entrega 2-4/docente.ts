import { Alumno } from "./alumno";

export class Docente {
    private nombreCompleto: string;
    private alumnos: Alumno[]; //Alumnos a cargo del docente

    constructor(nombreCompleto: string) {
        this.nombreCompleto = nombreCompleto;
        this.alumnos = new Array(); //Creamos un arreglo vacio en donde se iran asignando alumnos
    }

    public getNombreCompleto(): string {
        return this.nombreCompleto;
    }

    public setNombreCompleto(nombreCompleto: string): void {
        this.nombreCompleto = nombreCompleto;
    }

    public getAlumnos(): string {
        let infoAlumnos: string = this.alumnos.map(al=>al.getNombreCompleto()).join('\n');//Devuelve un string con todos los alumnos, uno debajo del otro
        return infoAlumnos;
    }

    public vincularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno); //Recibe un alumno y lo agrega al arreglo de alumnos
    }

    public desvincularAlumno(alumno: Alumno): void {
        let posicion: number = this.alumnos.indexOf(alumno); //Buscamos la posicion del alumno, si no lo encuentra, indexOf devuelve -1
        if (posicion == -1) {
            return;
        }
        this.alumnos.splice(posicion, 1);
    }
}   