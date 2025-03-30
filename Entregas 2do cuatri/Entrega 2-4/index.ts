import { Escuela } from "./escuela";
import { Docente } from "./docente";
import { Alumno } from "./alumno";

let alumno1 = new Alumno('Juan Perez', 8);
let alumno2 = new Alumno('Lucio Gomez', 4);
let alumno3 = new Alumno('Julian Alvarez', 9);
let alumno4 = new Alumno('Pedro Arias', 1);

let docente1 = new Docente('Lalo Landa', [alumno1, alumno2, alumno3, alumno4]);

let alumno5 = new Alumno('Maria Hernandez', 3);
let alumno6 = new Alumno('Noah Luna', 7);
let alumno7 = new Alumno('Mariana Estevez', 8);
let alumno8 = new Alumno('Pablo Demateo', 10);

let docente2 = new Docente('Julia Fernandez', [alumno5, alumno6, alumno7, alumno8]);

let escuela1 = new Escuela('CEPIT',[docente1,docente2]);


/* console.log(`\nDocente:\t${escuela1.getDocente(0).getNombreCompleto()}`); */
/* console.log(escuela1.getDocente(0).getAlumno(0).getNombreYAprobacion());
console.log(escuela1.getDocente(0).getAlumno(1).getNombreYAprobacion());
console.log(escuela1.getDocente(0).getAlumno(2).getNombreYAprobacion());
console.log(escuela1.getDocente(0).getAlumno(3).getNombreYAprobacion());
console.log(`\nDocente:\t${escuela1.getDocente(1).getNombreCompleto()}`);
console.log(escuela1.getDocente(1).getAlumno(0).getNombreYAprobacion());
console.log(escuela1.getDocente(1).getAlumno(1).getNombreYAprobacion());
console.log(escuela1.getDocente(1).getAlumno(2).getNombreYAprobacion());
console.log(escuela1.getDocente(1).getAlumno(3).getNombreYAprobacion()); */
/* console.log(escuela1.getDocente(0).getAlumnos()); */

console.log(escuela1.getDocentesYAlumnos());