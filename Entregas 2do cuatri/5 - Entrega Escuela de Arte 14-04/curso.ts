import { Docente } from './docente';
import { Alumno } from './alumno';

export class Curso {
    private nombre: string;
    private duracion_semanas: number;
    private fecha_inicio: Date;
    private docente_responsable: Docente;
    private alumnos: Alumno[];

    constructor(nombre: string, duracion_semanas: number, fecha_inicio: Date, docente_responsable: Docente, alumnos: Alumno[] = []) {
        this.nombre = nombre;
        this.duracion_semanas = duracion_semanas;
        this.fecha_inicio = fecha_inicio;
        this.docente_responsable = docente_responsable;
        this.alumnos = alumnos;
    }

    listarInfo(): void {
        console.log(`Curso:\t\t\t${this.nombre}\nDuracion:\t\t${this.duracion_semanas} semanas\nFecha de Inicio:\t${this.fecha_inicio.toLocaleDateString()}`);
        this.docente_responsable.listarInfo();
        this.alumnos.forEach(al =>
            al.listarInfo()
        );
        console.log(`--------------------------------------------`)
    }

    agregarAlumnos(alumnos: Alumno[]): void {
        alumnos.forEach(al => {
            this.alumnos.push(al);
        }
        );
    }

    getNombre(): string {
        return this.nombre;
    }
}
