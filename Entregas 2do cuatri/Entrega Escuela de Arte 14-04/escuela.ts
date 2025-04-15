import { Curso } from "./curso";
import { Alumno } from "./alumno";
import { Docente } from "./docente";

export class Escuela {
    private nombre: string;
    private cursos: Curso[];
    static contadorLegajoAlumnos: number = 1;
    alumnos: Alumno[]
    docentes: Docente[]

    constructor(nombre: string, cursos: Curso[] = []) {
        this.nombre = nombre;
        this.cursos = cursos;
        this.alumnos = new Array;
        this.docentes = new Array;
    }

    listarInfo(): void {
        this.cursos.forEach(cur => cur.listarInfo());
    }

    eliminarCurso(nombre: string): void {
        let cursoIndex: number = this.cursos.findIndex(curso => curso.getNombre() == nombre)
        if (cursoIndex == -1) {
            return
        }
        this.cursos.splice(cursoIndex, 1);
        console.log(`Curso ${nombre} removido correctamente.`);
    }

    agregarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }

    setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    getNombre(): string {
        return this.nombre;
    }

    agregarAlumno(alumno: Alumno): void {
        let indexAlumno: number = this.alumnos.findIndex(al => al.getDni() == alumno.getDni());
        if (indexAlumno !== -1) return;
        this.alumnos.push(alumno);
    }
    
    agregarDocente(docente: Docente): void {
        let indexDocente: number = this.docentes.findIndex(doc => doc.getDni() == docente.getDni());
        if (indexDocente !== -1) return;
        this.docentes.push(docente);
    }
}