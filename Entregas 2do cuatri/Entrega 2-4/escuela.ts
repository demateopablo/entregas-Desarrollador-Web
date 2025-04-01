import { Docente } from "./docente";
import { Alumno } from "./alumno";

export class Escuela {
    private nombre: string;
    private docentes: Docente[];
    private alumnos: Alumno[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.docentes = new Array();
        this.alumnos = new Array();
    }

    public getDocente(docente: Docente): Docente {
        let posicion: number = this.docentes.indexOf(docente);
        if (posicion !== -1) {
            return this.docentes[posicion];
        } else throw new Error("Docente no encontrado");
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    public despedirDocente(docente: Docente): void {
        let posicion: number = this.docentes.indexOf(docente);
        if (posicion !== -1) {
            this.docentes.splice(posicion, 1);
        } else throw new Error("Docente no encontrado");
    }

    public desvincularAlumnoADocente(docente: Docente, alumno: Alumno): void {
        this.getDocente(docente).desvincularAlumno(alumno);
    }

    public contratarDocente(docente: Docente): void {
        this.docentes.push(docente);
    }

    public vincularAlumnoADocente(alumno: Alumno, docente: Docente): void {
        this.getDocente(docente).vincularAlumno(alumno);
    }

    public listarAlumnos():string{
        return this.alumnos.map(alumno => alumno.getNombreCompleto()).join("\n");
    }

    public listarDocentes(): string {
        return this.docentes.map(docente => docente.getNombreCompleto()).join("\n");
        ;
    }

}