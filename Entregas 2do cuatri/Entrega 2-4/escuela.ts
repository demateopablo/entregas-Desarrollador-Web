import { Docente } from "./docente";
import { Alumno } from "./alumno";

export class Escuela {
    private nombre: string;
    private docentes: Docente[];

    constructor(nombre: string, docentes: Docente[]) {
        this.nombre = nombre;
        this.docentes = docentes;
    }

    public getDocente(posicion: number): Docente {
        return this.docentes[posicion];
    }


    public getDocentes(): string {
        let infoDocentes: string = ``;
        this.docentes.forEach(docente => {
            infoDocentes += `${docente.getNombreCompleto()}\n`;
        })
        return infoDocentes;
    }

    public getDocentesYAlumnos(): string {
        let infoDocentesYAlumnos: string = ``;
        this.docentes.forEach(docente => {
            infoDocentesYAlumnos += `Docente:\t${docente.getNombreCompleto()}\nAlumnos:\n`;
            infoDocentesYAlumnos += docente.getAlumnos();
        })
        return infoDocentesYAlumnos;
    }

    public despedirDocente(posicion: number): void {
        this.docentes.splice(posicion, 1);
    }
    public expulsarAlumno(posicionDocente: number, posicionAlumno: number): void {
        this.docentes[posicionDocente].expulsarAlumno(posicionAlumno);
    }

    public contratarDocente(docente: Docente): void {
        this.docentes.push(docente);
    }

    public matricularAlumno(alumno: Alumno, posicionDocente: number): void {
        this.docentes[posicionDocente].matricularAlumno(alumno);
    }


}