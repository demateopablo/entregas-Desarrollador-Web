import { Docente } from "./docente";
import { Alumno } from "./alumno";

export class Escuela {
    private nombre: string;
    private docentes: Docente[]; 
    private alumnos: Alumno[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.docentes = new Array(); //Creamos un arreglo vacio en donde se iran asignando docentes
        this.alumnos = new Array(); //Creamos un arreglo vacio en donde se iran asignando alumnos
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
    public contratarDocente(docente: Docente): void {
        this.docentes.push(docente);
    }

    public despedirDocente(docente: Docente): void {
        let posicion: number = this.docentes.indexOf(docente);
        if (posicion == -1) {
            return;
        }
        this.docentes.splice(posicion, 1);
    }
    public expulsarAlumno(alumno: Alumno): void {
        let posicion: number = this.alumnos.indexOf(alumno);
        if (posicion == -1) {
            return;
        }
        this.alumnos.splice(posicion, 1);
    }

    public desvincularAlumnoADocente(docente: Docente, alumno: Alumno): void {
        let posicion: number = this.docentes.indexOf(docente);
        if (posicion == -1) {
            return;
        }
        this.docentes[posicion].desvincularAlumno(alumno);
    }

    public vincularAlumnoADocente(alumno: Alumno, docente: Docente): void {
        let posicion: number = this.docentes.indexOf(docente);
        if (posicion == -1) {
            return;
        }
        this.docentes[posicion].vincularAlumno(alumno);
    }

    public listarAlumnos(): string {
        return this.alumnos.map(al => al.getNombreCompleto()).join("\n");
    }

    public listarDocentes(): string {
        return this.docentes.map(doc => doc.getNombreCompleto()).join("\n");
    }

}